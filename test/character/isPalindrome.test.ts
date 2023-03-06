import { isPalindrome } from "../../src/character/isPalindrome";

describe('isPalindrome function', () => {
    it('return true', () => {
        const result = isPalindrome('aabaa')
        expect(result).toBe(true)
    })

    it('return false', () => {
        const result = isPalindrome('aabab')
        expect(result).toBe(false)
    })

    it('ja return true', () => {
        const result = isPalindrome('しんぶんし')
        expect(result).toBe(true)
    })

    it('ja return false', () => {
        const result = isPalindrome('吾輩は猫である')
        expect(result).toBe(false)
    })
})