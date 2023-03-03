import { accumulate } from '../../src/itertools/accumulate'


describe('accumulate function', () => {
    it('return empty', () => {
        const result = accumulate([])
        expect(result).toEqual([])
    })

    it('return collect', () => {
        const result = accumulate([1, 2, 3, 4, 5])
        expect(result).toEqual([1, 3, 6, 10, 15])
    }
    )
})
