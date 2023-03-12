export class BinaryHeap<T> {
    public heap: T[];
    private compare: (a: T, b: T) => number;

    constructor(compareFn: (a: T, b: T) => number) {
        this.heap = [];
        this.compare = compareFn;
    }

    public push(value: T): void {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    public pop(): T | undefined {
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            const result = this.heap[0];
            this.heap[0] = last!;
            this.sinkDown(0);
            return result;
        } else {
            return last;
        }
    }

    private bubbleUp(index: number): void {
        const element = this.heap[index];
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            const parent = this.heap[parentIndex];
            if (this.compare(element, parent) >= 0) {
                break;
            }
            this.heap[index] = parent;
            this.heap[parentIndex] = element;
            index = parentIndex;
        }
    }

    private sinkDown(index: number): void {
        const element = this.heap[index];
        const length = this.heap.length;
        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let leftChild: T, rightChild: T;
            let swapIndex = null;
            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (this.compare(leftChild, element) < 0) {
                    swapIndex = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swapIndex === null && this.compare(rightChild, element) < 0) ||
                    (swapIndex !== null && this.compare(rightChild, leftChild!) < 0)) {
                    swapIndex = rightChildIndex;
                }
            }
            if (swapIndex === null) {
                break;
            }
            this.heap[index] = this.heap[swapIndex];
            this.heap[swapIndex] = element;
            index = swapIndex;
        }
    }

    public size(): number {
        return this.heap.length;
    }
}