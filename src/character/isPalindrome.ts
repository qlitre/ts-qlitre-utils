/**
 * 
 * @param s 文字列
 * @returns 回文ならtrueを返す
 */
export const isPalindrome = (s: string): boolean => {
    const reversedStr = s.split('').reverse().join('')
    return s == reversedStr
}