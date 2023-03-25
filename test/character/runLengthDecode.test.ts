import { runLengthDecode } from "../../src/character/runLengthDecode";

describe('runLengthDecode', () => {
    test('正常なケース', () => {
        expect(runLengthDecode([
            ['a', 2],
            ['b', 4],
            ['a', 2],
            ['c', 1],
            ['a', 1],
        ])).toEqual('aabbbbaaca');

        expect(runLengthDecode([
            ['a', 2],
        ])).toEqual('aa');

        expect(runLengthDecode([
            ['a', 1],
            ['b', 1],
            ['c', 1],
        ])).toEqual('abc');
    });

    test('空の配列', () => {
        expect(runLengthDecode([])).toEqual('');
    });

    test('1つの要素を持つ配列', () => {
        expect(runLengthDecode([['a', 1]])).toEqual('a');
    });
});