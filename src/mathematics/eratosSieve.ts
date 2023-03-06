/**
 * 
 * @param n 素数を取得したい上限の数字
 * @returns 素数の配列を返す
 */
export function eratosSieve(n: number): number[] {
    if (n <= 1) {
        return []
    }
    const primes: boolean[] = new Array(n + 1).fill(true)
    primes[0] = false
    primes[1] = false
    for (let i = 2; i < Math.floor(Math.sqrt(n)) + 1; i++) {
        if (!primes[i])
            continue
        for (let j = i * 2; j < n + 1; j += i) {
            primes[j] = false
        }
    }
    const ret = []
    for (let i = 0; i < n + 1; i++) {
        if (primes[i]) {
            ret.push(i)
        }
    }
    return ret
}