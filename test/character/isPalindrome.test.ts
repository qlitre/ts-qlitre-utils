import { isPalindrome } from "../../src/character/isPalindrome";

describe('isPalindrome function', () => {
    it('returns true if the input is a palindrome', () => {
        expect(isPalindrome('racecar')).toBe(true)
        expect(isPalindrome('Deified')).toBe(true)
        expect(isPalindrome('A man a plan a canal Panama')).toBe(true)
    })
    it('returns false if the input is not a palindrome', () => {
        expect(isPalindrome('hello')).toBe(false)
        expect(isPalindrome('world')).toBe(false)
        expect(isPalindrome('Hello world')).toBe(false)
    })
})