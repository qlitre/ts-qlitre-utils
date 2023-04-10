import { generateLunLunNumbers } from '../../src/mathematics/generateLunLunNumbers'

describe("generateLunLunNumbers", () => {
    test("should return the first 10 LunLun numbers", () => {
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = generateLunLunNumbers(10);
        expect(result).toEqual(expected);
    });

    test("should return an empty array when limit is 0", () => {
        const expected: number[] = [];
        const result = generateLunLunNumbers(0);
        expect(result).toEqual(expected);
    });

    test("should return the first 20 LunLun numbers including consecutive duplicate digits", () => {
        const expected = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 21, 22, 23, 32, 33, 34, 43, 44,
        ];
        const result = generateLunLunNumbers(20);
        expect(result).toEqual(expected);
    });
});