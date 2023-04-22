import { eulerTour } from "../../src/graph/eulerTour";

describe('eulerTour', () => {
    test('test case 1', () => {
        const graph = { 0: [3, 1], 3: [0], 1: [0, 4, 2], 4: [1], 2: [1] };
        const n = Object.keys(graph).length;

        const [tour, inTime, outTime] = eulerTour(n, graph, 0);

        expect(tour).toEqual([0, 1, 2, 1, 4, 1, 0, 3, 0]);
        expect(inTime).toEqual([0, 1, 2, 7, 4]);
        expect(outTime).toEqual([9, 6, 3, 8, 5]);
    });

    test('test case 2', () => {
        const graph = { 0: [3, 1], 3: [0, 5], 1: [0, 4, 2], 4: [1], 2: [1], 5: [3] };
        const n = Object.keys(graph).length;

        const [tour, inTime, outTime] = eulerTour(n, graph, 0);

        expect(tour).toEqual([0, 1, 2, 1, 4, 1, 0, 3, 5, 3, 0]);
        expect(inTime).toEqual([0, 1, 2, 7, 4, 8]);
        expect(outTime).toEqual([11, 6, 3, 10, 5, 9]);
    });
});