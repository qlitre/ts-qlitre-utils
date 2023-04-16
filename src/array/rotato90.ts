export function rotate90<T>(data: T[][]): T[][] {
    const h = data.length;
    const w = data[0].length;
    const ret: T[][] = Array.from({ length: w }, () => Array.from({ length: h }));
    for (let i = 0; i < h; i++) {
        const row = data[i];
        for (let j = 0; j < w; j++) {
            ret[j][i] = row[w - j - 1];
        }
    }
    return ret;
}