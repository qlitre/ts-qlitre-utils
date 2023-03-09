/**
 * 
 * @param arr 数値の配列
 * @returns 配列の最大値を返す
 */
export const arrayMax = (arr: number[]): number | undefined => {
    if (arr.length == 0) {
        throw new Error('空の配列は指定できません');
    }
    const getMax = (a: number, b: number): number => { return Math.max(a, b) }
    return arr.reduce(getMax)
}