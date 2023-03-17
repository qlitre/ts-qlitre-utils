import { combinations } from "../../src/itertools/combinations";

describe('combinations function', () => {
    it('should return all combinations of length 2 for the given array', () => {
        const arr = [1, 2, 3, 4];
        const expected = [[1, 2],
        [1, 3],
        [1, 4],
        [2, 3],
        [2, 4],
        [3, 4],
        ];
        const actual = Array.from(combinations(arr, 2));
        expect(actual).toEqual(expected);
    });

    it('should return all combinations of length 3 for the given array', () => {
        const arr = [1, 2, 3];
        const expected = [[1, 2, 3],
        ];
        const actual = Array.from(combinations(arr, 3));
        expect(actual).toEqual(expected);
    });

    it('should return an empty array when the length of the array is less than the combination length', () => {
        const arr = [1, 2, 3];
        const expected: number[][] = [];
        const actual = Array.from(combinations(arr, 4));
        expect(actual).toEqual(expected);
    });
});