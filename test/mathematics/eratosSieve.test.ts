import { eratosSieve } from "../../src/mathematics/eratosSieve"

describe('eratosSieve function', () => {
    it('returns an empty array when n is less than or equal to 1', () => {
        expect(eratosSieve(1)).toEqual([])
        expect(eratosSieve(0)).toEqual([])
        expect(eratosSieve(-1)).toEqual([])
    })
    it('returns an array of primes when n is a positive integer greater than 1', () => {
        expect(eratosSieve(2)).toEqual([2])
        expect(eratosSieve(10)).toEqual([2, 3, 5, 7])
        expect(eratosSieve(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19])
        expect(eratosSieve(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    })
})
