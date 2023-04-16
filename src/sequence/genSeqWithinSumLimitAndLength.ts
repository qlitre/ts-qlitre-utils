
/**
 * 指定された合計値以下で、指定された長さの数列を生成する。
 *
 * @param remain 生成する数列の合計が `remain` 以下である必要がある。
 * @param depth 現在の深さ。再帰的に呼び出されるたびに、 `depth` は1ずつ増加する。
 * @param length 生成する数列の長さ。
 *
 * @returns `length` で足して `remain` 以下の数列のリスト。
 *
 * @example
 * ```typescript
 * const seqs = generateSequencesWithinSumLimitAndLength(5, 1, 3);
 * console.log(seqs); // => [[1, 1, 3], [1, 2, 2], [1, 3, 1], [2, 1, 2], [2, 2, 1], [3, 1, 1]]
 * ```
 */
export const genSeqWithinSumLimitAndLength = (
    remain: number,
    depth: number,
    length: number
): number[][] => {
    if (remain <= 0) {
        return [];
    }
    if (depth === 0) {
        return [];
    }
    if (depth === length) {
        const ret = [];
        for (let i = 1; i <= remain; i++) {
            ret.push([i]);
        }
        return ret;
    }

    const ret = [];
    for (let i = 1; i <= remain; i++) {
        for (const j of genSeqWithinSumLimitAndLength(
            remain - i,
            depth + 1,
            length
        )) {
            ret.push([i, ...j]);
        }
    }
    return ret;
}