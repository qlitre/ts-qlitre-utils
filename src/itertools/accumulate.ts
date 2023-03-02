/**
 * 
 * @param aList 整数の配列
 * @returns 累積和
 */
export const accumulate = (aList: number[]): number[] => {
    const ret: number[] = []
    if (aList.length == 0) {
        return ret
    }
    ret.push(aList[0])
    for (let i = 1; i < aList.length; i++) {
        ret.push(aList[i] + ret[i - 1])
    }
    return ret
}