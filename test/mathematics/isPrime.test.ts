import { isPrime } from '../../src/mathematics/isPrime'

describe('isPrime function', () => {
    it('returns false when the input is less than or equal to 1', () => {
        expect(isPrime(0)).toBe(false)
        expect(isPrime(1)).toBe(false)
        expect(isPrime(-2)).toBe(false)
    })
    it('returns true when the input is a prime number', () => {
        expect(isPrime(2)).toBe(true)
        expect(isPrime(7)).toBe(true)
        expect(isPrime(11)).toBe(true)
        expect(isPrime(31)).toBe(true)
        expect(isPrime(89)).toBe(true)
    })
    it('returns false when the input is a composite number', () => {
        expect(isPrime(4)).toBe(false)
        expect(isPrime(12)).toBe(false)
        expect(isPrime(20)).toBe(false)
        expect(isPrime(45)).toBe(false)
    })
})