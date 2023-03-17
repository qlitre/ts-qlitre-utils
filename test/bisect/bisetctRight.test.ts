import { bisectRight } from "../../src/bisect/bisectRight";

describe('bisectRight function', () => {
    it('returns the correct index if the value exists in the array', () => {
        const arr = [1, 3, 4, 4, 4, 6, 8, 10];
        expect(bisectRight(arr, 4)).toBe(5);
    });

    it('returns the correct index if the value does not exist in the array', () => {
        const arr = [1, 3, 4, 6, 8, 10];
        expect(bisectRight(arr, 5)).toBe(3);
        expect(bisectRight(arr, 11)).toBe(6);
        expect(bisectRight(arr, -1)).toBe(0);
    });
});