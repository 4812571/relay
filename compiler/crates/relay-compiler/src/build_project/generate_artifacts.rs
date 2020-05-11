/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

use super::apply_transforms::Programs;
use crate::config::{Config, ProjectConfig};
use crate::errors::BuildProjectError;
use common::FileKey;
use graphql_ir::{FragmentDefinition, NamedItem, OperationDefinition};
use graphql_text_printer::{
    print_fragment, print_full_operation, write_operation_with_graphqljs_formatting,
};
use graphql_transforms::{MATCH_CONSTANTS, REFETCHABLE_CONSTANTS};
use interner::StringKey;
use md5::{Digest, Md5};
use persist_query::persist;
use relay_codegen::{build_request_params, Printer};
use relay_typegen::{generate_fragment_type, generate_operation_type};
use signedsource::{sign_file, SIGNING_TOKEN};
use std::fmt::Write;

/// Represents a generated output artifact.
#[derive(Clone)]
pub struct Artifact {
    pub name: StringKey,
    pub content: String,
    /// The source file responsible for generating this file.
    /// For example: `my_project/Component.react.js`
    pub source_file: FileKey,
}

pub async fn generate_artifacts(
    config: &Config,
    project_config: &ProjectConfig,
    programs: &Programs<'_>,
) -> Result<Vec<Artifact>, BuildProjectError> {
    let mut artifacts = Vec::new();
    let mut printer = Printer::default();
    for node in programs.normalization.operations() {
        if let Some(directive) = node
            .directives
            .named(MATCH_CONSTANTS.custom_module_directive_name)
        {
            // Generate normalization file for SplitOperation
            let name_arg = directive
                .arguments
                .named(MATCH_CONSTANTS.derived_from_arg)
                .unwrap();
            let source_name = name_arg.value.item.expect_string_literal();
            let source_node = programs
                .source
                .fragment(source_name)
                .expect("Expected the source document for the SplitOperation to exist.");
            let source_string = print_fragment(programs.source.schema(), &source_node);
            let source_hash = md5(&source_string);
            artifacts.push(generate_split_operation_artifact(
                &mut printer,
                config,
                programs,
                node,
                &source_hash,
                source_node.name.location.file(),
            ));
        } else if let Some(directive) = node
            .directives
            .named(REFETCHABLE_CONSTANTS.refetchable_operation_metadata_name)
        {
            let source_name = directive
                .arguments
                .named(REFETCHABLE_CONSTANTS.refetchable_operation_metadata_name)
                .unwrap()
                .value
                .item
                .expect_string_literal();
            let source_node = programs
                .source
                .fragment(source_name)
                .expect("Expected the source document for the SplitOperation to exist.");
            let source_string = print_fragment(programs.source.schema(), &source_node);
            let source_hash = md5(&source_string);
            artifacts.push(
                generate_normalization_artifact(
                    &mut printer,
                    config,
                    project_config,
                    programs,
                    node,
                    &source_hash,
                    source_node.name.location.file(),
                )
                .await?,
            );
        } else {
            let source_node = programs.source.operation(node.name.item).unwrap();
            // TODO: Consider using the std::io::Write trait here to directly
            // write to the md5. Currently, this doesn't work as `write_operation`
            // expects a `std::fmt::Write`.
            // Same for fragment hashing below.
            let mut source_string = String::new();
            write_operation_with_graphqljs_formatting(
                programs.source.schema(),
                &source_node,
                &mut source_string,
            )
            .unwrap();
            let source_hash = md5(&source_string);
            artifacts.push(
                generate_normalization_artifact(
                    &mut printer,
                    config,
                    project_config,
                    programs,
                    node,
                    &source_hash,
                    node.name.location.file(),
                )
                .await?,
            );
        }
    }
    for node in programs.reader.fragments() {
        let source_node = programs.source.fragment(node.name.item).unwrap();
        // Same as for operation hashing above.
        let source_string = print_fragment(programs.source.schema(), &source_node);
        let source_hash = md5(&source_string);
        artifacts.push(generate_reader_artifact(
            &mut printer,
            config,
            project_config,
            programs,
            node,
            &source_hash,
        ));
    }

    Ok(artifacts)
}

async fn generate_normalization_artifact(
    printer: &mut Printer,
    config: &Config,
    project_config: &ProjectConfig,
    programs: &Programs<'_>,
    node: &OperationDefinition,
    source_hash: &str,
    source_file: FileKey,
) -> Result<Artifact, BuildProjectError> {
    let name = node.name.item;
    let print_operation_node = programs
        .operation_text
        .operation(name)
        .expect("a query text operation should be generated for this operation");
    let text = print_full_operation(&programs.operation_text, print_operation_node);
    let mut request_parameters = build_request_params(&node);
    let mut operation_hash = None;
    if let Some(ref persist_config) = project_config.persist {
        operation_hash = Some(md5(&text));
        let id = persist(&text, &persist_config.url, &persist_config.params)
            .await
            .map_err(BuildProjectError::PersistError)?;
        request_parameters.id = Some(id);
    } else {
        request_parameters.text = Some(text.clone());
    };
    let reader_operation = programs
        .reader
        .operation(name)
        .expect("a reader fragment should be generated for this operation");
    let operation_fragment = FragmentDefinition {
        name: reader_operation.name,
        variable_definitions: reader_operation.variable_definitions.clone(),
        selections: reader_operation.selections.clone(),
        used_global_variables: Default::default(),
        directives: reader_operation.directives.clone(),
        type_condition: reader_operation.type_,
    };
    let mut content = get_content_start(config);
    writeln!(content, " * {}", SIGNING_TOKEN).unwrap();
    if let Some(operation_hash) = operation_hash {
        writeln!(content, " * @relayHash {}", operation_hash).unwrap();
    }
    writeln!(content, " * @flow").unwrap();
    writeln!(content, " * @lightSyntaxTransform").unwrap();
    writeln!(content, " * @nogrep").unwrap();
    if let Some(codegen_command) = &config.codegen_command {
        writeln!(content, " * @codegen-command: {}", codegen_command).unwrap();
    }
    writeln!(content, " */\n").unwrap();
    writeln!(content, "/* eslint-disable */\n").unwrap();
    writeln!(content, "'use strict';\n").unwrap();
    if let Some(id) = &request_parameters.id {
        writeln!(content, "// @relayRequestID {}\n", id).unwrap();
    }
    let typegen_node = programs
        .typegen
        .operation(name)
        .expect("a type fragment should be generated for this operation");
    writeln!(
        content,
        "/*::\nimport type {{ ConcreteRequest }} from 'relay-runtime';\n{}*/\n",
        generate_operation_type(
            typegen_node,
            programs.typegen.schema(),
            &project_config.enum_module_suffix,
            &project_config.optional_input_fields
        )
    )
    .unwrap();
    writeln!(content, "/*\n{}*/\n", text).unwrap();
    writeln!(
        content,
        "var node/*: ConcreteRequest*/ = {};\n",
        printer.print_request_deduped(
            programs.normalization.schema(),
            node,
            &operation_fragment,
            request_parameters
        )
    )
    .unwrap();
    writeln!(content, "if (__DEV__) {{").unwrap();
    writeln!(content, "  (node/*: any*/).hash = \"{}\";", source_hash).unwrap();
    writeln!(content, "}}\n").unwrap();
    writeln!(content, "module.exports = node;").unwrap();

    Ok(Artifact {
        name: node.name.item,
        content: sign_file(&content),
        source_file,
    })
}

fn generate_reader_artifact(
    printer: &mut Printer,
    config: &Config,
    project_config: &ProjectConfig,
    programs: &Programs<'_>,
    node: &FragmentDefinition,
    source_hash: &str,
) -> Artifact {
    let name = node.name.item;
    let mut content = get_content_start(config);
    writeln!(content, " * {}", SIGNING_TOKEN).unwrap();
    writeln!(content, " * @flow").unwrap();
    writeln!(content, " * @lightSyntaxTransform").unwrap();
    writeln!(content, " * @nogrep").unwrap();
    if let Some(codegen_command) = &config.codegen_command {
        writeln!(content, " * @codegen-command: {}", codegen_command).unwrap();
    }
    writeln!(content, " */\n").unwrap();
    writeln!(content, "/* eslint-disable */\n").unwrap();
    writeln!(content, "'use strict';\n").unwrap();
    let typegen_node = programs
        .typegen
        .fragment(name)
        .expect("a type fragment should be generated for this fragment");
    writeln!(
        content,
        "/*::\nimport type {{ ReaderFragment }} from 'relay-runtime';\n{}*/\n",
        generate_fragment_type(
            typegen_node,
            programs.typegen.schema(),
            &project_config.enum_module_suffix,
            &project_config.optional_input_fields
        )
    )
    .unwrap();
    writeln!(
        content,
        "var node/*: ReaderFragment*/ = {};\n",
        printer.print_fragment_deduped(programs.normalization.schema(), node)
    )
    .unwrap();
    writeln!(content, "if (__DEV__) {{").unwrap();
    writeln!(content, "  (node/*: any*/).hash = \"{}\";", source_hash).unwrap();
    writeln!(content, "}}\n").unwrap();
    writeln!(content, "module.exports = node;").unwrap();

    Artifact {
        name,
        content: sign_file(&content),
        source_file: node.name.location.file(),
    }
}

fn generate_split_operation_artifact(
    printer: &mut Printer,
    config: &Config,
    programs: &Programs<'_>,
    node: &OperationDefinition,
    source_hash: &str,
    source_file: FileKey,
) -> Artifact {
    let mut content = get_content_start(config);
    writeln!(content, " * {}", SIGNING_TOKEN).unwrap();
    writeln!(content, " * @flow").unwrap();
    writeln!(content, " * @lightSyntaxTransform").unwrap();
    writeln!(content, " * @nogrep").unwrap();
    if let Some(codegen_command) = &config.codegen_command {
        writeln!(content, " * @codegen-command: {}", codegen_command).unwrap();
    }
    writeln!(content, " */\n").unwrap();
    writeln!(content, "/* eslint-disable */\n").unwrap();
    writeln!(content, "'use strict';\n").unwrap();
    writeln!(
        content,
        "/*::\nimport type {{ NormalizationSplitOperation }} from 'relay-runtime';\n\n*/\n"
    )
    .unwrap();
    writeln!(
        content,
        "var node/*: NormalizationSplitOperation*/ = {};\n",
        printer.print_operation_deduped(programs.normalization.schema(), node)
    )
    .unwrap();
    writeln!(content, "if (__DEV__) {{").unwrap();
    writeln!(content, "  (node/*: any*/).hash = \"{}\";", source_hash).unwrap();
    writeln!(content, "}}\n").unwrap();
    writeln!(content, "module.exports = node;").unwrap();

    Artifact {
        name: node.name.item,
        content: sign_file(&content),
        source_file,
    }
}

fn get_content_start(config: &Config) -> String {
    let mut content = String::new();
    writeln!(content, "/**").unwrap();
    if !config.header.is_empty() {
        for header_line in &config.header {
            writeln!(content, " * {}", header_line).unwrap();
        }
        writeln!(content, " *").unwrap();
    }
    content
}

fn md5(data: &str) -> String {
    let mut md5 = Md5::new();
    md5.input(data);
    hex::encode(md5.result())
}
