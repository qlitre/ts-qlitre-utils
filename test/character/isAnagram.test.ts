import { isAnagram } from "../../src/character/isAnagram";

describe('isAnagram function', () => {
    it('return true', () => {
        const s1 = "baa"
        const s2 = 'aab'
        const result = isAnagram(s1, s2)
        expect(result).toBe(true)
    })

    it('return false', () => {
        const s1 = "aab"
        const s2 = 'abb'
        const result = isAnagram(s1, s2)
        expect(result).toBe(false)
    })

    it('ja return true', () => {
        const s1 = "インターネット土鳩"
        const s2 = '鳩ン土ネイトータッ'
        const result = isAnagram(s1, s2)
        expect(result).toBe(true)
    })

    it('ja return false', () => {
        const s1 = "あいう"
        const s2 = 'いうえ'
        const result = isAnagram(s1, s2)
        expect(result).toBe(false)
    })
})