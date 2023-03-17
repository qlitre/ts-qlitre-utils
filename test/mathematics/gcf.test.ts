import { gcf } from "../../src/mathematics/gcf";

describe('gcf function', () => {
    it('returns the correct result when both x and y are positive integers', () => {
        expect(gcf(12, 8)).toBe(4)
        expect(gcf(15, 25)).toBe(5)
        expect(gcf(7, 13)).toBe(1)
        expect(gcf(60, 48)).toBe(12)
    })
    it('returns x when y is zero', () => {
        expect(gcf(10, 0)).toBe(10)
        expect(gcf(7, 0)).toBe(7)
        expect(gcf(1, 0)).toBe(1)
    })
})