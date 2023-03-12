/**
 * 
 * @param arr 数値の配列
 * @returns 転倒数を返す
 */
export const countInversion = (arr: number[]): number => {
    let count = 0
    if (arr.length == 1) return count
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) count++
        }
    }
    return count
}