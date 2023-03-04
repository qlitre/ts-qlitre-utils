/**
 * 
 * @param items 配列
 * @param combiLength 組み合わせ数
 * @returns 組み合わせをyieldして返す
 */
export function* combinations<T>(items: T[], combiLength: number, startIdx = 0, prefix: T[] = []): Generator<T[]> {
    if (combiLength === 0) {
        yield prefix;
        return;
    };
    for (let i = startIdx; i <= items.length - combiLength; i++) {
        const newPrefix = [...prefix, items[i]];
        yield* combinations(items, combiLength - 1, i + 1, newPrefix);
    };
};