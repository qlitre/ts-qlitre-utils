import { power } from "../../src/mathematics/power";

describe('power function', () => {
    test('should correctly compute power modulo', () => {
        expect(power(BigInt(2), BigInt(3), BigInt(5)).toString()).toBe(BigInt(3).toString());
        expect(power(BigInt(3), BigInt(3), BigInt(7)).toString()).toBe(BigInt(6).toString());
        expect(power(BigInt(5), BigInt(5), BigInt(17)).toString()).toBe(BigInt(14).toString());
        expect(power(BigInt(123), BigInt(456), BigInt(789)).toString()).toBe(BigInt(699).toString());
    });

    test('should handle edge cases', () => {
        expect(power(BigInt(0), BigInt(0), BigInt(1)).toString()).toBe(BigInt(0).toString());
        expect(power(BigInt(1), BigInt(0), BigInt(1)).toString()).toBe(BigInt(0).toString());
        expect(power(BigInt(2), BigInt(0), BigInt(5)).toString()).toBe(BigInt(1).toString());
        expect(power(BigInt(3), BigInt(1), BigInt(7)).toString()).toBe(BigInt(3).toString());
    });
});