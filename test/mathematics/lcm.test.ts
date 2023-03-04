import { lcm } from "../../src/mathematics/lcm";

describe('gcf function', () => {
    it('2 4 => 4', () => {
        const result = lcm(2, 4)
        expect(result).toBe(4)
    });
    it('3 7 => 21', () => {
        const result = lcm(3, 7)
        expect(result).toBe(21)
    });
    it('4 6 => 12', () => {
        const result = lcm(4, 6)
        expect(result).toBe(12)
    });
});