import { arrayMin } from "../../src/array/arrayMin";

describe('arrayMin function', () => {
    it('正しく返ることを確認', () => {
        expect(arrayMin([1, 2, 3])).toEqual(1);
        expect(arrayMin([10, 5, 0, 25, 100])).toEqual(0);
        expect(arrayMin([-1, -10, -5])).toEqual(-10);
    });

    it('空の配列を渡した際はエラー', () => {
        expect(() => {
            arrayMin([]);
        }).toThrow('空の配列は指定できません');
    });

    it('配列の長さが１の時を確認', () => {
        expect(arrayMin([5])).toEqual(5);
    });
});
