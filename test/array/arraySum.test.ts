import { arraySum } from "../../src/array/arraySum";

describe('arraySum function', () => {
    it('returns the sum of values in the array', () => {
        expect(arraySum([1, 2, 3, 4, 5])).toBe(15)
        expect(arraySum([10, -20, 30, 40])).toBe(60)
        expect(arraySum([-5, -10, -15, 20, 30])).toBe(20)
    })
    it('throws an error if the input array is empty', () => {
        expect(() => arraySum([])).toThrow('空の配列は指定できません')
    })
})