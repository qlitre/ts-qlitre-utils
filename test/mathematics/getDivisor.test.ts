import { getDivisor } from "../../src/mathematics/getDivisor";

describe('getDivisor function', () => {
    it('returns the correct result when the input is 1', () => {
        expect(getDivisor(1)).toEqual([1])
    })
    it('returns the correct result when the input is a prime number', () => {
        expect(getDivisor(2)).toEqual([1, 2])
        expect(getDivisor(7)).toEqual([1, 7])
        expect(getDivisor(11)).toEqual([1, 11])
    })
    it('returns the correct result when the input is a composite number', () => {
        expect(getDivisor(4)).toEqual([1, 2, 4])
        expect(getDivisor(12)).toEqual([1, 2, 3, 4, 6, 12])
        expect(getDivisor(20)).toEqual([1, 2, 4, 5, 10, 20])
    })
})