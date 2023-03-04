import { gcf } from "./gcf"

/**
 * 
 * @param x 正の整数
 * @param y 正の整数
 * @returns 最小公倍数を返す
 */
export const lcm = (x: number, y: number): number => {
    const product = x * y
    const ret = Math.floor(product / gcf(x, y))
    return ret
}