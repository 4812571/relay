/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @oncall relay
 *
 * @generated SignedSource<<d18f135ce06fc6f59dbb8f3f4a311aa7>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { FragmentType } from "relay-runtime";
declare export opaque type readUpdatableQueryEXPERIMENTALTest_node$fragmentType: FragmentType;
*/

module.exports.validate = function validate(value/*: {
  +__id: string,
  +__isreadUpdatableQueryEXPERIMENTALTest_node?: string,
  +$fragmentSpreads: readUpdatableQueryEXPERIMENTALTest_node$fragmentType,
  ...
}*/)/*: false | {
  +__id: string,
  +__isreadUpdatableQueryEXPERIMENTALTest_node: string,
  +$fragmentSpreads: readUpdatableQueryEXPERIMENTALTest_node$fragmentType,
  ...
}*/ {
  return value.__isreadUpdatableQueryEXPERIMENTALTest_node != null ? (value/*: any*/) : false;
};
