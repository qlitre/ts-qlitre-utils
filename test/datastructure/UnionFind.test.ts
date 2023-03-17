import { UnionFind } from "../../src/datastructure/UnionFind";

describe('UnionFind class', () => {
    it('correctly initializes the parents array when creating a new instance', () => {
        const uf = new UnionFind(5)
        expect(uf['parents']).toEqual([-1, -1, -1, -1, -1])
    })

    it('correctly performs find and union operations', () => {
        const uf = new UnionFind(5)
        uf.union(0, 1)
        expect(uf.same(0, 1)).toBe(true)
        expect(uf.same(0, 2)).toBe(false)
        expect(uf.find(0)).toBe(uf.find(1))
        expect(uf.find(0)).not.toBe(uf.find(2))

        uf.union(1, 2)
        expect(uf.same(0, 2)).toBe(true)
        expect(uf.size(0)).toBe(3)
        expect(uf.size(3)).toBe(1)
    })

    it('correctly returns the roots and group count', () => {
        const uf = new UnionFind(5)
        expect(uf.roots()).toEqual([0, 1, 2, 3, 4])
        uf.union(0, 1)
        uf.union(1, 2)
        expect(uf.roots()).toEqual([0, 3, 4])
        expect(uf.groupCount()).toBe(3)
        uf.union(3, 4)
        expect(uf.roots()).toEqual([0, 3])
        expect(uf.groupCount()).toBe(2)
    })

    it('correctly returns the group members', () => {
        const uf = new UnionFind(5)
        uf.union(0, 1)
        uf.union(1, 2)
        uf.union(3, 4)
        expect(uf.members(0)).toEqual([0, 1, 2])
        expect(uf.members(1)).toEqual([0, 1, 2])
        expect(uf.members(3)).toEqual([3, 4])
    })
})