import { arrayMax } from "../../src/array/arrayMax";

describe('arrayMax function', () => {
    it('正しく返ることを確認', () => {
        expect(arrayMax([1, 2, 3])).toEqual(3);
        expect(arrayMax([10, 5, 0, 25, 100])).toEqual(100);
        expect(arrayMax([-1, -10, -5])).toEqual(-1);
    });

    it('空の配列を渡した際はエラー', () => {
        expect(() => {
            arrayMax([]);
        }).toThrow('空の配列は指定できません');
    });

    it('配列の長さが１の時を確認', () => {
        expect(arrayMax([5])).toEqual(5);
    });
});


