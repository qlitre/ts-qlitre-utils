import { getDivisor } from "../../src/mathematics/getDivisor";

describe('getDivisor function', () => {
    it('1 => [1]', () => {
        const result = getDivisor(1)
        expect(result).toEqual([1])
    });
    it('全て違う数字', () => {
        const result = getDivisor(6)
        expect(result).toEqual([1, 2, 3, 6])
    });
    it('同じ数字がある場合', () => {
        const result = getDivisor(16)
        expect(result).toEqual([1, 2, 4, 8, 16])
    });
});