/**
 * 
 * @param arr 配列
 * @returns 最大部分配列和
 */
export const maxSubarraySum = (arr: number[]): number => {
    let maxCur = arr[0]
    let maxGlobal = arr[0]
    for (let i = 1; i < arr.length; i++) {
        maxCur = Math.max(arr[i], maxCur + arr[i])
        if (maxCur > maxGlobal) {
            maxGlobal = maxCur
        }
    }
    return maxGlobal
}