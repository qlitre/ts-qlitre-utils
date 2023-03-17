import { bisectLeft } from "../../src/bisect/bisectLeft";

describe('bisectLeft function', () => {
    test('finds the index of the first occurrence of the search value', () => {
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 4)).toBe(3);
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 5)).toBe(5);
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 0)).toBe(0);
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 7)).toBe(7);
    });

    test('returns the index where the search value should be inserted', () => {
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 4.5)).toBe(5);
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], -1)).toBe(0);
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 10)).toBe(7);
        expect(bisectLeft([1, 2, 3, 4, 4, 5, 6], 3.5)).toBe(3);
    });
});



