import { accumulate } from '../../src/itertools/accumulate'

describe("accumulate", () => {
    test("empty array should return an empty array", () => {
        expect(accumulate([])).toEqual([]);
    });

    test("one-element array should return the same array", () => {
        expect(accumulate([1])).toEqual([1]);
    });

    test("multiple-element array should return the correct accumulated array", () => {
        expect(accumulate([1, 2, 3, 4])).toEqual([1, 3, 6, 10]);
        expect(accumulate([0, 1, 0, 1, 0, 1])).toEqual([0, 1, 1, 2, 2, 3]);
        expect(accumulate([5, 1, 2, 10, 6])).toEqual([5, 6, 8, 18, 24]);
    });
});