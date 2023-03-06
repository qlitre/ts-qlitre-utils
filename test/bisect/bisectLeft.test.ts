import { bisectLeft } from "../../src/bisect/bisectLeft";

describe('bisectLeft function', () => {
    const arr = [1, 3, 5, 7, 9]
    it('一番小さい値', () => {
        const result = bisectLeft(arr, 0)
        expect(result).toBe(0)
    })
    it('一番大きい値', () => {
        const result = bisectLeft(arr, 10)
        expect(result).toBe(5)
    })
    it('存在する値', () => {
        const result = bisectLeft(arr, 3)
        expect(result).toBe(1)
    })
    it('存在しない値', () => {
        const result = bisectLeft(arr, 4)
        expect(result).toBe(2)
    })
})