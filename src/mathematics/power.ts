export const power = (a: bigint, b: bigint, mod: bigint): bigint => {
    let ret = 1n;
    if (b === 0n) return 1n % mod
    let p = a;
    const maxBit = b.toString(2).length
    for (let i = 0n; i < maxBit; i++) {
        const wari = 2n ** i;
        if (wari > b) break
        if ((b / wari) % 2n === 1n) {
            ret = (ret * p) % mod;
        }
        p = (p * p) % mod;
    }
    return ret;
}