import { arraySum } from "../../src/array/arraySum";

describe('arraySum function', () => {
    test('正しく返ることを確認', () => {
        expect(arraySum([1, 2, 3])).toBe(6);
        expect(arraySum([10, 20, 30])).toBe(60);
        expect(arraySum([-1, 2, 3])).toBe(4);
        expect(arraySum([0, 0, 0, 0, 1])).toBe(1);
    });

    test('空の配列を渡した際はエラー', () => {
        expect(() => arraySum([])).toThrow('空の配列は指定できません');
    });

    test('配列の長さが１の時に返ることを確認', () => {
        expect(arraySum([5])).toBe(5);
    });
});
