/**
 * 
 * @param arr 数値の配列
 * @returns 配列の合計値を返す
 */
export const arraySum = (arr: number[]): number | undefined => {
    if (arr.length == 0) {
        throw new Error('空の配列は指定できません');
    }
    return arr.reduce((a, b) => a + b, 0);
}