import { Deque } from "../datastructure/Deque";

/**
 * 
 * @param limit 何個生成するか
 * @returns ルンルン数を小さい順に生成して返す。
    ルンルン数=>正の整数X を(leading zeroなしで)十進数表記した際に、隣り合うどの2つの桁の値についても、差の絶対値が1以下
    ex:
    1234
    1
    334
 */
export const generateLunLunNumbers = (limit: number): number[] => {
    const ret: number[] = []
    const que = new Deque<number>()
    for (let i = 1; i < 10; i++) {
        que.append(i)
    }
    while (ret.length < limit) {
        const currentNum = que.popleft()
        if (currentNum == null) continue
        ret.push(currentNum)
        const lastDigit = currentNum % 10
        if (lastDigit > 0) {
            que.append(currentNum * 10 + lastDigit - 1)
        }
        que.append(currentNum * 10 + lastDigit)
        if (lastDigit < 9) {
            que.append(currentNum * 10 + lastDigit + 1)
        }
    }
    ret.sort((a, b) => a - b)
    return ret
}
