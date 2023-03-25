/**
 * 
 * @param s 文字列
 * @returns aabb => a2b2
 */
export const runLengthEncodeToString = (s: string): string => {
    if (s.length == 0) return ''
    let encodedString: string = '';
    let currentChar = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            count++;
        } else {
            encodedString += currentChar
            encodedString += String(count)
            currentChar = s[i];
            count = 1;
        }
    }
    encodedString += currentChar
    encodedString += String(count)

    return encodedString;
}