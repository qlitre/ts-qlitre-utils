import { gcf } from "../../src/mathematics/gcf";

describe('gcf function', () => {
    it('2 4 => 2', () => {
        const result = gcf(2, 4)
        expect(result).toBe(2)
    })

    it('8 12 => 4', () => {
        const result = gcf(8, 12)
        expect(result).toBe(4)
    })

    it('3 7 => 1', () => {
        const result = gcf(3, 7)
        expect(result).toBe(1)
    })
})