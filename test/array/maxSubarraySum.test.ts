import { maxSubarraySum } from "../../src/array/maxSubarraySum";

describe('maxSubarraySum function', () => {
    test('It should return maximum subarray sum', () => {
        const arr1 = [1, -3, 2, 1, -1];
        const arr2 = [-2, -3, 4, -1, -2, 1, 5, -3];
        const arr3 = [1, 1, 1, -1, -1, -1, 1, 1, 1];
        const arr4 = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

        expect(maxSubarraySum(arr1)).toBe(3);
        expect(maxSubarraySum(arr2)).toBe(7);
        expect(maxSubarraySum(arr3)).toBe(3);
        expect(maxSubarraySum(arr4)).toBe(-1);
    });
});