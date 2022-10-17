"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[17825],{55324:(e,t,n)=>{n.d(t,{Z:()=>d});n(89495),n(88917),n(47763),n(33978);var a=n(86668),r=n(34863),l=n(67294),u=l.useMemo,i=l.useState,s=l.useLayoutEffect,o=l.useEffect,c={glyphMargin:!1,folding:!1,lineDecorationsWidth:10,lineNumbersMinChars:0,language:"graphql",minimap:{enabled:!1},lineNumbers:"off",automaticLayout:!0,fontSize:"16px",scrollBeyondLastLine:!1,renderIndentGuides:!1,renderLineHighlight:"none",tabSize:2};function d(e){var t=e.text,n=e.onDidChange,d=e.diagnostics,f=e.style,m=i(null),g=m[0],p=m[1],y=(0,a.L)().isDarkTheme?"vs-dark":"vs",v=u((function(){return null==g?null:r.j6.create(g,c)}),[g]);return s((function(){null!=v&&v.setValue(t)}),[v,t]),s((function(){if(null!=v){var e=v.getModel();if(null!=e){var t=(null!=d?d:[]).map((function(e){return{severity:8,message:e.message,startLineNumber:e.line_start+1,startColumn:e.column_start+1,endLineNumber:e.line_end+1,endColumn:e.column_end+1}}));r.j6.setModelMarkers(e,"relay",t)}}}),[v,d]),s((function(){r.j6.setTheme(y)}),[y]),o((function(){if(null!=v&&null!=n){var e=v.onDidChangeModelContent((function(){n(v.getValue())}));return function(){e.dispose()}}}),[v,n]),l.createElement("div",{ref:p,style:f})}},91305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});var a="\ntype User {\n  name: String\n  age: Int\n  best_friend: User\n}\n\ntype Query {\n  me: User\n}\n ".trim(),r="\nquery MyQuery {\n  me {\n    name\n    ...AgeFragment\n    best_friend {\n      ...AgeFragment\n    }\n  }\n}\n\nfragment AgeFragment on User {\n  age\n}\n ".trim(),l=[{key:"enable_flight_transform",label:"Flight Transforms",kind:"bool",default:!0},{key:"hash_supported_argument",label:"Hash Supported Argument",kind:"enum",default:!0},{key:"no_inline",label:"@no_inline",kind:"enum",default:!0},{key:"enable_3d_branch_arg_generation",label:"3D Branch Arg Generation",kind:"bool",default:!0},{key:"actor_change_support",label:"Actor Change Support",kind:"enum",default:!0},{key:"text_artifacts",label:"Text Artifacts",kind:"enum",default:!0},{key:"enable_client_edges",label:"Client Edges",kind:"enum",default:!0}],u={schemaText:a,documentText:r,outputType:"operation",featureFlags:Object.fromEntries(l.map((function(e){return[e.key,e.default]}))),language:"typescript"},i=n(57639),s=n(26961);var o=n(67294),c=o.useReducer,d=o.useMemo,f=o.useEffect,m="relayCompilerExplorerLastContent";function g(){var e=c(p,null,y),t=e[0],n=e[1];f((function(){var e=function(e){var t=new URLSearchParams;t.set("enc","1");for(var n=0,a=Object.entries(e);n<a.length;n++){var r=a[n],l=r[0],u=r[1];if("schemaText"==l||"documentText"==l)t.set(l,s.compressToEncodedURIComponent(u));else if("featureFlags"==l)for(var i=0,o=Object.entries(u);i<o.length;i++){var c=o[i],d=c[0],f=c[1];t.set(d,f)}else t.set(l,u)}return t.toString()}(t),n="#"+e;window.history.replaceState(null,null,n),localStorage.setItem(m,n)}),[t]);var a=d((function(){return{setSchemaText:function(e){return n({type:"UPDATE_SCHEMA",schemaText:e})},setDocumentText:function(e){return n({type:"UPDATE_DOCUMENT",documentText:e})},setFeatureFlag:function(e,t){return n({type:"SET_FEATURE_FLAG",flag:e,value:t})},setLanguage:function(e){return n({type:"SET_LANGUAGE",language:e})},setOutputType:function(e){return n({type:"SET_OUTPUT_TYPE",outputType:e})}}}),[]);return Object.assign({state:t},a)}function p(e,t){var n;switch(t.type){case"UPDATE_SCHEMA":return Object.assign({},e,{schemaText:t.schemaText});case"UPDATE_DOCUMENT":return Object.assign({},e,{documentText:t.documentText});case"SET_OUTPUT_TYPE":return Object.assign({},e,{outputType:t.outputType});case"SET_FEATURE_FLAG":var a=Object.assign({},e.featureFlags,((n={})[t.flag]=t.value,n));return Object.assign({},e,{featureFlags:a});case"SET_LANGUAGE":return Object.assign({},e,{language:t.language});default:throw new Error("Unexpected action type: "+t.type)}}function y(){var e=window.location.hash||localStorage.getItem(m);if(null!=e&&"#"===e[0]&&e.length>1){var t=e.slice(1);try{return function(e){if("1"!==e.get("enc"))return console.warn("Unexpected encoding version: "+e.get("enc")),null;for(var t={},n=0,a=Object.keys(u);n<a.length;n++){var r=a[n],o=e.get(r);if("schemaText"==r||"documentText"==r)t[r]=s.decompressFromEncodedURIComponent(o);else if("featureFlags"==r){for(var c,d={},f=(0,i.Z)(l);!(c=f()).done;){var m=c.value.key;d[m]=Boolean(e.get(m))}t[r]=d}else t[r]=e.get(r)}return t}(new URLSearchParams(t))||u}catch(n){return console.warn("Failed to decode previous state: ",n),u}}return u}var v=n(34660),h=n(86010),E=o.useState,b=o.useEffect,T=o.useLayoutEffect,_=o.useMemo;function x(){return o.createElement(v.Z,{title:"Compiler Explorer"},o.createElement(k,{minHeight:600},o.createElement(S,null)))}function k(e){var t=e.children,n=e.minHeight,a=E(null),r=a[0],l=a[1],u=E(null),i=u[0],s=u[1];return T((function(){if(null!=r){var e=r.getBoundingClientRect().y,t=Math.max(window.innerHeight-e,n);s(t)}}),[r,n]),o.createElement("div",{style:{height:i},ref:l},null!=i&&t)}function S(){var e,t,a,r=g(),u=r.state,i=r.setOutputType,s=r.setDocumentText,c=r.setSchemaText,f=r.setFeatureFlag,m=r.setLanguage,p=function(e){var t=e.schemaText,a=e.documentText,r=e.language,u=e.outputType,i=function(e){return d((function(){var t=Object.fromEntries(l.map((function(t){var n=t.key,a=t.kind,r=e.featureFlags[n];switch(a){case"enum":return[n,{kind:r?"enabled":"disabled"}];case"bool":return[n,r];default:throw new Error("Unexpected feature flag kind: "+a)}})));return JSON.stringify(t,null,2)}),[e.featureFlags])}(e),s=function(){var e=E(null),t=e[0],a=e[1];return b((function(){var e=!1,t=n(67672);return(0,t.default)().then((function(){e||a(t)})),function(){e=!0}}),[]),t}();return _((function(){if(null==s)return{Ok:"Loading..."};try{switch(u){case"ast":return JSON.parse(s.parse_to_ast(a));case"ir":return JSON.parse(s.parse_to_ir(t,a));case"reader":return JSON.parse(s.parse_to_reader_ast(i,t,a));case"normalization":return JSON.parse(s.parse_to_normalization_ast(i,t,a));case"operation":return JSON.parse(s.transform(i,t,a));case"types":var e=JSON.stringify({language:r});return JSON.parse(s.parse_to_types(i,e,t,a));default:throw new Error("Unknown output type "+u)}}catch(n){return{Ok:"Error: The compiler crashed: "+n.message}}}),[t,a,u,s,i,r])}(u),y=null!=(e=p.Ok)?e:"",v=null==(t=p.Err)?void 0:t.SchemaDiagnostics,h=null==(a=p.Err)?void 0:a.DocumentDiagnostics,T=_((function(){return n(55324).Z}),[]);return o.createElement("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:20,rowGap:20,backgroundColor:"var(--light-bg-color)"}},o.createElement("div",{style:{display:"flex",columnGap:20}},o.createElement("div",{style:{width:"50%",alignSelf:"flex-end"}},o.createElement(C,null,"Schema")),o.createElement("div",{style:{width:"50%"}},o.createElement(O,{values:[{value:"operation",label:"Operation"},{value:"ast",label:"AST"},{value:"ir",label:"IR"},{value:"normalization",label:"Normalization AST"},{value:"reader",label:"Reader AST"},{value:"types",label:"Types"}],selectedValue:u.outputType,setSelectedValue:function(e){return i(e)}}))),o.createElement("div",{style:{display:"flex",flexGrow:1,columnGap:20}},o.createElement("div",{style:{width:"50%",display:"flex",flexDirection:"column"}},o.createElement(T,{text:u.schemaText,onDidChange:c,style:{flexGrow:1},diagnostics:v}),o.createElement(C,null,"Document"),o.createElement(T,{text:u.documentText,onDidChange:s,style:{flexGrow:3},diagnostics:h}),o.createElement(C,null,"Feature Flags"),o.createElement(w,{setFeatureFlag:f,featureFlags:u.featureFlags}),o.createElement(F,{setLanguage:m,language:u.language})),o.createElement("div",{style:{width:"50%",display:"flex"}},o.createElement("div",{style:{flexGrow:1,display:"flex",flexDirection:"column"}},o.createElement(T,{text:y,style:{flexGrow:1}})))))}function w(e){var t=e.featureFlags,n=e.setFeatureFlag;return o.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"}},l.map((function(e){var a=e.key,r=e.label;return o.createElement("label",{key:a,style:{display:"block"}},o.createElement("input",{type:"checkbox",checked:t[a],onChange:function(e){return n(a,e.target.checked)}}),r)})))}function F(e){var t=e.setLanguage,n=e.language;return o.createElement("div",null,o.createElement("label",null,"Type Generation Language:",o.createElement("select",{onChange:function(e){return t(e.target.value)},value:n},o.createElement("option",{value:"flow"},"Flow"),o.createElement("option",{value:"typescript"},"TypeScript"))))}function O(e){var t=e.values,n=e.selectedValue,a=e.setSelectedValue;return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:"tabs"},t.map((function(e){var t=e.value,r=e.label,l=n===t;return o.createElement("li",{role:"tab",tabIndex:l?0:-1,"aria-selected":l,className:(0,h.Z)("tabs__item",{"tabs__item--active":l}),key:t,onClick:function(){return a(t)}},r)}))))}function C(e){var t=e.children;return o.createElement("h3",{style:{margin:0,padding:"var(--ifm-tabs-padding-vertical) var(--ifm-tabs-padding-horizontal)"}},t)}}}]);