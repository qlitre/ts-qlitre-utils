/**
 * 
 * @param n 正の整数を指定
 * @returns 素数かどうかを返す
 */
export const isPrime = (n: number): boolean => {
    if (n <= 1) {
        return false
    };
    if (n == 2) {
        return true
    };
    const maxNumber = Number(Math.sqrt(n)) + 1
    for (let i = 2; i < maxNumber; i++) {
        if (n % i == 0) {
            return false
        };
    };
    return true
};