/**
 * 
 * @param num 正の整数
 * @returns 約数の配列を返す
 */
export const getDivisor = (num: number): number[] => {
    if (num == 1) return [1]
    const ret: number[] = []
    const maxNum = Math.floor(Math.sqrt(num)) + 1

    for (let i = 1; i < maxNum; i++) {
        if (num % i == 0) {
            ret.push(i)
            const div = Number(num / i)
            if (i != div) {
                ret.push(div)
            }
        }
    }
    ret.sort((a, b) => a - b)
    return ret
}