/**
 * 
 * @param s1 文字列
 * @param s2 文字列
 * @returns アナグラムならtrueを返す
 */
export const isAnagram = (s1: string, s2: string): boolean => {
    const sorted1 = s1.split('').sort((a, b) => a < b ? -1 : 1).join('')
    const sorted2 = s2.split('').sort((a, b) => a < b ? -1 : 1).join('')

    return sorted1 == sorted2
}