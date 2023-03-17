import { arrayMin } from "../../src/array/arrayMin";

describe('arrayMin function', () => {
    it('returns the minimum value in the array', () => {
        expect(arrayMin([1, 2, 3, 4, 5])).toBe(1)
        expect(arrayMin([10, -20, 30, 40])).toBe(-20)
        expect(arrayMin([-5, -10, -15])).toBe(-15)
    })
    it('throws an error if the input array is empty', () => {
        expect(() => arrayMin([])).toThrow('空の配列は指定できません')
    })
})