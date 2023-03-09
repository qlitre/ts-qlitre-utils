export const arrayMax = (arr: number[]): number | undefined => {
    if (arr.length == 0) {
        throw new Error('空の配列は指定できません');
    }
    const getMax = (a: number, b: number): number => { return Math.max(a, b) }
    return arr.reduce(getMax)
}