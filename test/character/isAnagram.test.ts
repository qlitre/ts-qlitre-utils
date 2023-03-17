import { isAnagram } from "../../src/character/isAnagram";

describe('isAnagram function', () => {
    it('returns true if the inputs are anagrams', () => {
        expect(isAnagram('listen', 'silent')).toBe(true)
        expect(isAnagram('debit card', 'bad credit')).toBe(true)
        expect(isAnagram('A gentleman', 'Elegant man')).toBe(true)
    })
    it('returns false if the inputs are not anagrams', () => {
        expect(isAnagram('test', 'rest')).toBe(false)
        expect(isAnagram('hello', 'world')).toBe(false)
    })
})