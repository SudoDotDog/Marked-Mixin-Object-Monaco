/**
 * @author WMXPY
 * @namespace MarkedMixinObjectMonaco
 * @description Factory
 */

import { MarkedMonacoExportsMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedObjectMixinDeclaration } from "./declaration";

export const markedObjectMonacoMixinFactory =
    MarkedMonacoExportsMixinFactory.fromExports(
        "marked-mixin-object",
        MarkedObjectMixinDeclaration,
    );
