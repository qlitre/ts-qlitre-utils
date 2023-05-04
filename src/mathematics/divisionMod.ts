import { power } from "./power";

/*
* a÷b を m で割った余りを返す関数
* 計算結果を x とすると、x * b を mod で割った余りが a になる点も留意する。
*/
export const divisionMod = (a: bigint, b: bigint, mod: bigint): bigint => {
    const powResult = power(b, mod - 2n, mod);
    const result = (a * powResult) % mod;
    return result < 0n ? result + mod : result;
}