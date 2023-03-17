import { countInversion } from "../../src/array/countInversion";

describe('countInversion function', () => {
    it('returns the inversion count of the array', () => {
        expect(countInversion([1, 2, 3, 4, 5])).toBe(0)
        expect(countInversion([5, 4, 3, 2, 1])).toBe(10)
        expect(countInversion([10, 20, 30, 40, 50])).toBe(0)
        expect(countInversion([2, 1, 4, 3, 6, 5])).toBe(3)
    })
})