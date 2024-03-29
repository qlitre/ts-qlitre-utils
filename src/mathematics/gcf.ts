/**
 * ユークリッドの互除法
 * @param x 正の整数
 * @param y 正の整数
 * @returns 最大公約数を返す
 */
export const gcf = (x: number, y: number): number => {
    if (y == 0) {
        [x, y] = [y, x]
    }
    while (y != 0) {
        [x, y] = [y, x % y]
    }
    return x
};
