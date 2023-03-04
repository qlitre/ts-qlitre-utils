/**
 * 
 * def prime_factorize(n: int) -> list:
    """素因数分解リストを返す"""
    if n == 1:
        return [1]
    ret = []
    while n % 2 == 0:
        ret.append(2)
        n //= 2
    f = 3
    while f * f <= n:
        if n % f == 0:
            ret.append(f)
            n //= f
        else:
            f += 2
    if n != 1:
        ret.append(n)
    return ret

 */

export const primeFactorize = (num: number): number[] => {
    if (num == 1) return [1];
    const ret: number[] = [];
    while (num % 2 == 0) {
        ret.push(2)
        num = Math.floor(num / 2)
    };
    let f = 3;
    while (f * f <= num) {
        if (num % f == 0) {
            ret.push(f)
            num = Number(num / 3)
        } else {
            f += 2
        };
    };
    if (num != 1) {
        ret.push(num)
    };
    return ret;
};
