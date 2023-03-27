import { topologicalSort } from "../../src/graph/topologicalSort";

describe('topologicalSort', () => {
    it('should return the correct topological order', () => {
        const n = 6
        const graph = {
            0: [1, 2, 3],
            1: [4],
            2: [4],
            3: [4],
            4: [5]
        }
        const intoNum = [0, 1, 1, 1, 3, 1]

        const result = topologicalSort(n, graph, intoNum)

        expect(result).toEqual([1, 2, 3, 4, 5, 6])
    })

    it('should return -1 when there is a cycle', () => {
        const n = 4
        const graph = {
            0: [1],
            1: [2],
            2: [3],
            3: [0]
        }
        const intoNum = [1, 1, 1, 1]

        const result = topologicalSort(n, graph, intoNum)

        expect(result).toEqual(-1)
    })
})