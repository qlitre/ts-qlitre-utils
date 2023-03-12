import { BinaryHeap } from "../../src/datastructure/BinaryHeap";

describe('BinaryHeap', () => {
    let binaryHeap: BinaryHeap<number>;

    beforeEach(() => {
        binaryHeap = new BinaryHeap<number>((a, b) => a - b);
    });

    test('push adds element to heap', () => {
        binaryHeap.push(5);
        binaryHeap.push(3);
        binaryHeap.push(8);

        expect(binaryHeap.size()).toBe(3);
    });

    test('pop removes and returns smallest element from heap', () => {
        binaryHeap.push(5);
        binaryHeap.push(3);
        binaryHeap.push(8);

        expect(binaryHeap.pop()).toBe(3);
        expect(binaryHeap.pop()).toBe(5);
        expect(binaryHeap.pop()).toBe(8);
    });

    test('pop returns undefined on empty heap', () => {
        expect(binaryHeap.pop()).toBeUndefined();
    });

    test('size returns number of elements in heap', () => {
        binaryHeap.push(5);
        binaryHeap.push(3);
        binaryHeap.push(8);

        expect(binaryHeap.size()).toBe(3);
    });
});