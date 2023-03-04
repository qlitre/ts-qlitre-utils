import { combinations } from "../../src/itertools/combinations";

describe('combinations function', () => {
    it('return empty', () => {
        const result = [...combinations([], 2)];
        expect(result).toEqual([]);
    });
    it('return [[]]', () => {
        const result = [...combinations([1, 2, 3], 0)];
        expect(result).toEqual([[]]);
    });
    it('return all', () => {
        const result = [...combinations([1, 2, 3], 2)];
        expect(result).toEqual([[1, 2], [1, 3], [2, 3]]);
    });
    it('return index=1', () => {
        const result = [...combinations([1, 2, 3], 2, 1)];
        expect(result).toEqual([[2, 3]]);
    });
});