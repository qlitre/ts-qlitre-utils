import { getDijkstraDistance } from "../../src/graph/getDijkstraDistance";

describe("getDijkstraDistance function", () => {
    test("returns correct distance for a simple graph", () => {
        const n = 3;
        const graph = {
            0: [[1, 2], [2, 3]],
            1: [[2, 1]],
            2: []
        };
        const startVertex = 0;
        const expected = [0, 2, 3];
        const result = getDijkstraDistance(n, graph, startVertex);
        expect(result).toEqual(expected);
    });

    test("returns correct distance for a graph with negative edges", () => {
        const n = 3;
        const graph = {
            0: [[1, 2], [2, 3]],
            1: [[2, -1]],
            2: []
        };
        const startVertex = 0;
        const expected = [0, 2, 1];
        const result = getDijkstraDistance(n, graph, startVertex);
        expect(result).toEqual(expected);
    });

    test("returns correct distance for a disconnected graph", () => {
        const n = 4;
        const graph = {
            0: [[1, 2], [2, 3]],
            1: [[2, 1]],
            2: [],
            3: []
        };
        const startVertex = 0;
        const expected = [0, 2, 3, Infinity];
        const result = getDijkstraDistance(n, graph, startVertex);
        expect(result).toEqual(expected)
    });
});
