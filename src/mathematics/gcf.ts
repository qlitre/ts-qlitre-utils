/**
 * ユークリッドの互除法
 * @param x 整数
 * @param y 整数
 * @returns 最大公約数
 */
export const gcf = (x: number, y: number): number => {
    if (y == 0) {
        const tmp = y
        x = tmp
        y = x
    };
    while (y != 0) {
        const tmp = x % y
        x = y
        y = tmp
    };
    return x
};
