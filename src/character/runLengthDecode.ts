/**
 * 
 * @param arr [[char,count]...]
 * @returns [['a',2],['b',2]] => aabb
 */
export const runLengthDecode = (arr: Array<[string, number]>): string => {
    if (arr.length == 0) return ''
    let decoded: string = '';
    for (const [char, count] of arr) {
        decoded += char.repeat(count)
    }
    return decoded;
}