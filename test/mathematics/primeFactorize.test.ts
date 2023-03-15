import { primeFactorize } from "../../src/mathematics/primeFactorize";

describe("primeFactorize function", () => {
    test("1 should return []", () => {
        expect(primeFactorize(1)).toEqual([]);
    });
    test("2 should return [2]", () => {
        expect(primeFactorize(2)).toEqual([2]);
    });
    test("12 should return [2, 2, 3]", () => {
        expect(primeFactorize(12)).toEqual([2, 2, 3]);
    });
    test("123456789 should return [3, 3, 3607, 3803]", () => {
        expect(primeFactorize(123456789)).toEqual([3, 3, 3607, 3803]);
    });
});