import { genSeqWithinSumLimitAndLength } from '../../src/sequence/genSeqWithinSumLimitAndLength'

describe('genSeqWithinSumLimitAndLength', () => {
    it('generates sequences with correct length and sum', () => {
        const sequences = genSeqWithinSumLimitAndLength(4, 1, 3);
        expect(sequences).toEqual([[1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1]]);
    });

    it('returns empty array when remain is zero', () => {
        const sequences = genSeqWithinSumLimitAndLength(0, 1, 3);
        expect(sequences).toEqual([]);
    });

    it('returns empty array when depth is zero', () => {
        const sequences = genSeqWithinSumLimitAndLength(5, 0, 3);
        expect(sequences).toEqual([]);
    });

    it('returns empty array when length is zero', () => {
        const sequences = genSeqWithinSumLimitAndLength(5, 1, 0);
        expect(sequences).toEqual([]);
    });
});