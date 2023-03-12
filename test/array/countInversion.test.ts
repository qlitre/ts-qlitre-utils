import { countInversion } from "../../src/array/countInversion";

describe('countInversion', () => {
    it('returns 0 when given an empty array', () => {
        expect(countInversion([])).toBe(0);
    });

    it('returns 0 when given an array with one element', () => {
        expect(countInversion([5])).toBe(0);
    });

    it('returns the correct number of inversions when given an array with multiple elements', () => {
        expect(countInversion([5, 3, 2, 4, 1])).toBe(8);
        expect(countInversion([1, 2, 3, 4, 5])).toBe(0);
        expect(countInversion([5, 4, 3, 2, 1])).toBe(10);
    });
});