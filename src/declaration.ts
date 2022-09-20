/**
 * @author WMXPY
 * @namespace MarkedMixinObjectMonaco
 * @description Declaration
 */

export const MarkedObjectMixinDeclaration: Record<string, string> = {

    keys: "(target: Object) => string[]",
    values: "<T>(target: {[s:string]: T} | ArrayLike<T>) => T[]",
    entries: "<T>(target: {[s:string]: T} | ArrayLike<T>) => [string, T][]",
};
