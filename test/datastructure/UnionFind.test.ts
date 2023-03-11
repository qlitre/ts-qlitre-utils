import { UnionFind } from "../../src/datastructure/UnionFind";

describe('UnionFindSimple', () => {
    let uf: UnionFind;

    beforeEach(() => {
        uf = new UnionFind(5);
    });

    test('find method', () => {
        uf.union(0, 1);
        uf.union(1, 2);
        expect(uf.find(2)).toBe(0);
    });

    test('union method', () => {
        uf.union(0, 1);
        uf.union(2, 3);
        uf.union(1, 3);
        expect(uf.find(0)).toBe(uf.find(3));
    });

    test('size method', () => {
        uf.union(0, 1);
        uf.union(1, 2);
        expect(uf.size(2)).toBe(3);
    });

    test('same method', () => {
        uf.union(0, 1);
        uf.union(2, 3);
        expect(uf.same(0, 2)).toBe(false);
        uf.union(1, 3);
        expect(uf.same(0, 2)).toBe(true);
    });

    test('members method', () => {
        uf.union(0, 1);
        uf.union(1, 2);
        expect(uf.members(2)).toEqual([0, 1, 2]);
    });

    test('roots method', () => {
        uf.union(0, 1);
        uf.union(2, 3);
        expect(uf.roots()).toEqual([0, 2, 4]);
    });

    test('groupCount method', () => {
        uf.union(0, 1);
        uf.union(2, 3);
        expect(uf.groupCount()).toBe(3);
        uf.union(1, 3);
        expect(uf.groupCount()).toBe(2);
    });

    test('allGroupMembers method', () => {
        uf.union(0, 1);
        uf.union(1, 2);
        uf.union(3, 4);
        const groupMembers = uf.allGroupMembers();
        expect(groupMembers.get(0)).toEqual([0, 1, 2]);
        expect(groupMembers.get(3)).toEqual([3, 4]);
    });
});