import { runLengthEncode } from "../../src/character/runLengthEncode";

describe('runLengthEncode function', () => {
    test('should return an empty array for an empty string', () => {
        expect(runLengthEncode('')).toEqual([]);
    });

    test('should correctly encode a string', () => {
        expect(runLengthEncode('aabbbbaaca')).toEqual([
            ['a', 2],
            ['b', 4],
            ['a', 2],
            ['c', 1],
            ['a', 1],
        ]);
    });

    test('should correctly encode a string with a single character', () => {
        expect(runLengthEncode('aaaaaaaaaa')).toEqual([['a', 10]]);
    });

    test('should correctly encode a string with alternating characters', () => {
        expect(runLengthEncode('abababababab')).toEqual([
            ['a', 1],
            ['b', 1],
            ['a', 1],
            ['b', 1],
            ['a', 1],
            ['b', 1],
            ['a', 1],
            ['b', 1],
            ['a', 1],
            ['b', 1],
            ['a', 1],
            ['b', 1],
        ]);
    });
});