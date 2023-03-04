import { bisectRight } from "../../src/bisect/bisectRight";

describe('bisectRight function', () => {
    const arr = [1, 3, 5, 7, 9]
    it('一番小さい値', () => {
        const result = bisectRight(arr, 0)
        expect(result).toBe(0)
    })
    it('一番大きい値', () => {
        const result = bisectRight(arr, 10)
        expect(result).toBe(5)
    })
    it('存在する値', () => {
        const result = bisectRight(arr, 3)
        expect(result).toBe(2)
    })
    it('存在しない値', () => {
        const result = bisectRight(arr, 4)
        expect(result).toBe(2)
    })
})