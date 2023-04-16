import { rotate90 } from "../../src/array/rotato90";

describe("rotate90", () => {
    it("should rotate a 2D array 90 degrees counterclockwise", () => {
        const input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const expected = [[3, 6, 9], [2, 5, 8], [1, 4, 7]];
        const result = rotate90(input);
        expect(result).toEqual(expected);
    });

    it("should rotate a 2D array with unequal dimensions 90 degrees counterclockwise", () => {
        const input = [[1, 2], [3, 4], [5, 6], [7, 8]];
        const expected = [[2, 4, 6, 8], [1, 3, 5, 7]];
        const result = rotate90(input);
        expect(result).toEqual(expected);
    });
});