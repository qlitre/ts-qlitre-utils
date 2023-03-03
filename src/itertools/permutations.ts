/**
 * 
 * @param items 
 * @returns 順列をyieldして返す
 */
export function* permutations<T>(items: T[], prefix: T[] = []): Generator<T[]> {
    if (items.length === 0) {
        yield prefix;
    } else {
        for (let i = 0; i < items.length; i++) {
            const newPrefix = prefix.concat(items[i]);
            const remainingItems = items.slice(0, i).concat(items.slice(i + 1));
            yield* permutations(remainingItems, newPrefix);
        }
    }
}