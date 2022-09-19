/**
 * @author WMXPY
 * @namespace MarkedMixinObjectMonaco
 * @description Declaration
 */

export const MarkedObjectMixinDeclaration: Record<string, string> = {

    keys: "<K, V>(object: Record<K, V>) => K[]",
    values: "<K, V>(object: Record<K, V>) => V[]",
    entries: "<K, V>(object: Record<K, V>) => Array<[K, V]>",
};
