/**
 * @author WMXPY
 * @namespace MarkedMixinObjectMonaco
 * @description Declaration
 */

export const MarkedObjectMixinDeclaration: Record<string, string> = {

    keys: "<K extends string | number, V>(object: Record<K, V>) => K[]",
    values: "<K extends string | number, V>(object: Record<K, V>) => V[]",
    entries: "<K extends string | number, V>(object: Record<K, V>) => Array<[K, V]>",
};
