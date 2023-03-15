/**
 * 
 * @param num 正の整数
 * @returns 素因数分解リストを返す
 */
export const primeFactorize = (num: number): number[] => {
    if (num == 1) return [];
    const ret: number[] = [];
    while (num % 2 == 0) {
        ret.push(2);
        num = Math.floor(num / 2);
    };
    let f = 3;
    while (f * f <= num) {
        if (num % f == 0) {
            ret.push(f);
            num = Math.floor(num / f);
        } else {
            f += 2;
        };
    };
    if (num != 1) {
        ret.push(num);
    };
    return ret;
};