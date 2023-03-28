import { SortedSet } from "../../src/datastructure/SortedSet";

describe("SortedSet", () => {
    test("constructor", () => {
        const set = new SortedSet([5, 3, 1, 4, 2]);
        expect(Array.from(set)).toEqual([1, 2, 3, 4, 5]);
    });

    test("add", () => {
        const set = new SortedSet();
        expect(set.add(1)).toBeTruthy();
        expect(set.add(2)).toBeTruthy();
        expect(set.add(3)).toBeTruthy();
        expect(set.add(1)).toBeFalsy();
        expect(Array.from(set)).toEqual([1, 2, 3]);
    });

    test("discard", () => {
        const set = new SortedSet([1, 2, 3]);
        expect(set.discard(2)).toBeTruthy();
        expect(set.discard(2)).toBeFalsy();
        expect(Array.from(set)).toEqual([1, 3]);
    });

    test("has", () => {
        const set = new SortedSet([1, 2, 3]);
        expect(set.has(1)).toBeTruthy();
        expect(set.has(2)).toBeTruthy();
        expect(set.has(3)).toBeTruthy();
        expect(set.has(4)).toBeFalsy();
    });

    test("lt, le, gt, ge", () => {
        const set = new SortedSet([1, 2, 3, 4, 5]);

        expect(set.lt(3)).toEqual(2);
        expect(set.le(3)).toEqual(3);
        expect(set.gt(3)).toEqual(4);
        expect(set.ge(3)).toEqual(3);

        expect(set.lt(1)).toBeNull();
        expect(set.le(0)).toBeNull();
        expect(set.gt(5)).toBeNull();
        expect(set.ge(6)).toBeNull();
    });

    test("index, indexRight", () => {
        const set = new SortedSet([1, 2, 3, 4, 5]);

        expect(set.index(3)).toEqual(2);
        expect(set.indexRight(3)).toEqual(3);
        expect(set.index(6)).toEqual(5);
        expect(set.indexRight(6)).toEqual(5);
    });

    test("length", () => {
        const set = new SortedSet([1, 2, 3, 4, 5]);
        expect(set.length()).toEqual(5);
    });

    test("get", () => {
        const set = new SortedSet([1, 2, 3, 4, 5]);
        expect(set.get(0)).toEqual(1);
        expect(set.get(1)).toEqual(2);
        expect(set.get(4)).toEqual(5);
        expect(() => set.get(5)).toThrowError("IndexError");
        expect(() => set.get(-6)).toThrowError("IndexError");
    });
});