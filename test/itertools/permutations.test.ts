import { permutations } from "../../src/itertools/permutations";

describe('permutations function', () => {
    it('return empty', () => {
        const result = [...permutations([])]
        expect(result).toEqual([[]])
    });
    it('return collect', () => {
        const result = [...permutations([1, 2, 3])]
        expect(result).toEqual([
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);
    });
});