/**
 * @author WMXPY
 * @namespace MarkedMixinObjectMonaco
 * @description Declaration
 */

export const MarkedObjectMixinDeclaration: Record<string, string> = {

    keys: "(target: Object) => string[]",
    values: "<T>(target: {[s:string]: T} | Array<T>) => T[]",
    entries: "<T>(target: {[s:string]: T} | Array<T>) => [string, T][]",
};
