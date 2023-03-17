import { lcm } from "../../src/mathematics/lcm";

describe('lcm function', () => {
    it('returns the correct result when both inputs are positive integers', () => {
        expect(lcm(4, 6)).toBe(12)
        expect(lcm(5, 7)).toBe(35)
        expect(lcm(9, 15)).toBe(45)
        expect(lcm(12, 18)).toBe(36)
    })
    it('returns NaN when either input is not a positive integer', () => {
        expect(lcm(-4, 6)).toBe(-12)
        expect(lcm(5, 0)).toBe(0)
        expect(lcm(9, -15)).toBe(-45)
    })
})