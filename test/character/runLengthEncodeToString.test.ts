import { runLengthEncodeToString } from "../../src/character/runLengthEncodeToString";

describe('runLengthEncodeToString', () => {
    test('returns empty string when input is empty', () => {
        expect(runLengthEncodeToString('')).toEqual('');
    });

    test('correctly encodes a string with repeated characters', () => {
        expect(runLengthEncodeToString('aaabbbccc')).toEqual('a3b3c3');
    });

    test('correctly encodes a string with non-repeated characters', () => {
        expect(runLengthEncodeToString('abcdefg')).toEqual('a1b1c1d1e1f1g1');
    });

    test('correctly encodes a string with a single character', () => {
        expect(runLengthEncodeToString('a')).toEqual('a1');
    });
});