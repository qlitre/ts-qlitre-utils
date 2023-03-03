/**
 * 
 * @param items 整数の配列
 * @returns 累積和
 */
export const accumulate = (items: number[]): number[] => {
    const ret: number[] = []
    if (items.length == 0) {
        return ret
    }
    ret.push(items[0])
    for (let i = 1; i < items.length; i++) {
        ret.push(items[i] + ret[i - 1])
    }
    return ret
}