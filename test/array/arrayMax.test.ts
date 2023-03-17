import { arrayMax } from "../../src/array/arrayMax";

describe('arrayMax function', () => {
    it('returns the maximum value in the array', () => {
        expect(arrayMax([1, 2, 3, 4, 5])).toBe(5)
        expect(arrayMax([10, -20, 30, 40])).toBe(40)
        expect(arrayMax([-5, -10, -15])).toBe(-5)
    })
    it('throws an error if the input array is empty', () => {
        expect(() => arrayMax([])).toThrow('空の配列は指定できません')
    })
})
