import { getTreeSimplePath } from "../../src/graph/getTreeSimplePath";

type Graph = Record<number, number[]>

describe("getTreeSimplePath", () => {
    const graph: Graph = {
        1: [2, 3],
        2: [1, 4, 5],
        3: [1, 6],
        4: [2],
        5: [2, 7],
        6: [3],
        7: [5],
        8: [9],
    };

    test("returns the correct path", () => {
        expect(getTreeSimplePath(8, graph, 1, 7)).toEqual([1, 2, 5, 7]);
        expect(getTreeSimplePath(8, graph, 3, 6)).toEqual([3, 6]);
        expect(getTreeSimplePath(8, graph, 4, 3)).toEqual([4, 2, 1, 3]);
    });

    test("returns -1 when there is no path", () => {
        expect(getTreeSimplePath(8, graph, 1, 8)).toEqual(-1);       
      });
});