/**
 * 
 * @param s 文字列
 * @returns aabb => [['a',2],['b',2]]
 */
export const runLengthEncode = (s: string): Array<[string, number]> => {
    if (s.length == 0) return []
    const encoded: Array<[string, number]> = [];
    let currentChar = s[0];
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === currentChar) {
            count++;
        } else {
            encoded.push([currentChar, count]);
            currentChar = s[i];
            count = 1;
        }
    }
    encoded.push([currentChar, count]);

    return encoded;
}