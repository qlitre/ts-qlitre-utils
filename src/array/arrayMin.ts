/**
 * 
 * @param arr 数値の配列
 * @returns 配列の最小値を返す
 */
export const arrayMin = (arr: number[]): number | undefined => {
    if (arr.length == 0) {
        throw new Error('空の配列は指定できません');
    }
    const getMin = (a: number, b: number): number => { return Math.min(a, b) }
    return arr.reduce(getMin)
}