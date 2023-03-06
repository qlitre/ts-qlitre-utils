import { eratosSieve } from "../../src/mathematics/eratosSieve";

describe('eratosSieve function', () => {
    jest.useFakeTimers();
    it('return empty', () => {
        const result = eratosSieve(1)
        expect(result).toEqual([])
    });

    it('return collect', () => {
        const result = eratosSieve(30)
        expect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29])
    });
});
