import { isPrime } from '../../src/mathematics/isPrime'

describe('isPrime function', () => {
    it('1 is false', () => {
        expect(isPrime(1)).toBe(false);
    });
    it('2 is true', () => {
        expect(isPrime(2)).toBe(true);
    });
    it('3 is true', () => {
        expect(isPrime(3)).toBe(true);
    });
    it('7 is true', () => {
        expect(isPrime(7)).toBe(true);
    });
    it('8 is false', () => {
        expect(isPrime(8)).toBe(false);
    });
});