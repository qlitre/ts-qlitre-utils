import { Deque } from "../../src/datastructure/Deque";

describe("Deque class", () => {
    let deque: Deque<number>;

    beforeEach(() => {
        deque = new Deque<number>();
    });

    test("append and pop", () => {
        deque.append(1);
        deque.append(2);
        deque.append(3);
        expect(deque.pop()).toBe(3);
        expect(deque.pop()).toBe(2);
        expect(deque.pop()).toBe(1);
        expect(deque.pop()).toBe(null);
    });

    test("appendleft and popleft", () => {
        deque.appendleft(1);
        deque.appendleft(2);
        deque.appendleft(3);
        expect(deque.popleft()).toBe(3);
        expect(deque.popleft()).toBe(2);
        expect(deque.popleft()).toBe(1);
        expect(deque.popleft()).toBe(null);
    });

    test("getLength", () => {
        expect(deque.getLength()).toBe(0);
        deque.append(1);
        expect(deque.getLength()).toBe(1);
        deque.append(2);
        expect(deque.getLength()).toBe(2);
        deque.pop();
        expect(deque.getLength()).toBe(1);
        deque.pop();
        expect(deque.getLength()).toBe(0);
    });

    test("toArray", () => {
        deque.append(1);
        deque.append(2);
        deque.append(3);
        expect(deque.toArray()).toEqual([1, 2, 3]);
        deque.pop();
        expect(deque.toArray()).toEqual([1, 2]);
        deque.appendleft(4);
        expect(deque.toArray()).toEqual([4, 1, 2]);
    });
});
