import { primeFactorize } from "../../src/mathematics/primeFactorize";

describe('getDivisor function', () => {
    it('1 => [1]', () => {
        const result = primeFactorize(1)
        expect(result).toEqual([1])
    });
    it('素数', () => {
        const result = primeFactorize(11)
        expect(result).toEqual([11])
    });
    it('素数じゃない場合', () => {
        const result = primeFactorize(12)
        expect(result).toEqual([2, 2, 3])
    });
});