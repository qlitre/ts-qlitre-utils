import { bisectLeft } from "../bisect/bisectLeft";
import { bisectRight } from "../bisect/bisectRight";

type T = any;

export class SortedSet{
    private static BUCKET_RATIO = 50;
    private static REBUILD_RATIO = 170;

    private size: number;
    private a: T[][];

    constructor(a: Iterable<T> = []) {
        let arr = Array.from(a);
        if (!arr.every((_, i) => i === arr.length - 1 || arr[i] < arr[i + 1])) {
            arr = Array.from(new Set(arr)).sort();
        }
        this.a = [];
        this.build(arr);
        this.size = arr.length;
    }

    private build(a: T[] = Array.from(this)) {
        const size = this.size = a.length;
        const bucketSize = Math.ceil(Math.sqrt(size / SortedSet.BUCKET_RATIO));
        this.a = Array.from({ length: bucketSize }, (_, i) => (
            a.slice(size * i / bucketSize, size * (i + 1) / bucketSize)
        ));
    }

    *[Symbol.iterator]() {
        for (const a of this.a) {
            for (const item of a) {
                yield item;
            }
        }
    }

    length() {
        return this.size;
    }

    private findBucket(x: T): T[] {
        for (const a of this.a) {
            if (x <= a[a.length - 1]) {
                return a;
            }
        }
        return this.a[this.a.length - 1];
    }

    has(x: T): boolean {
        if (this.size === 0) {
            return false;
        }
        const a = this.findBucket(x);
        const i = bisectLeft(a, x);
        return i !== a.length && a[i] === x;
    }

    add(x: T): boolean {
        if (this.size === 0) {
            this.a = [[x]];
            this.size = 1;
            return true;
        }
        const a = this.findBucket(x);
        const i = bisectLeft(a, x);
        if (i !== a.length && a[i] === x) {
            return false;
        }
        a.splice(i, 0, x);
        this.size++;
        if (a.length > this.a.length * SortedSet.REBUILD_RATIO) {
            this.build();
        }
        return true;
    }

    discard(x: T): boolean {
        if (this.size === 0) {
            return false;
        }
        const a = this.findBucket(x);
        const i = bisectLeft(a, x);
        if (i === a.length || a[i] !== x) {
            return false;
        }
        a.splice(i, 1);
        this.size--;
        if (a.length === 0) {
            this.build();
        }
        return true;
    }

    lt(x: T): T | null {
        for (const a of this.a.slice().reverse()) {
            if (a[0] < x) {
                return a[bisectLeft(a, x) - 1];
            }
        }
        return null;
    }

    le(x: T): T | null {
        for (const a of this.a.slice().reverse()) {
            if (a[0] <= x) {
                return a[bisectRight(a, x) - 1];
            }
        }
        return null;
    }

    gt(x: T): T | null {
        for (const a of this.a) {
            if (a[a.length - 1] > x) {
                return a[bisectRight(a, x)];
            }
        }
        return null;
    }

    ge(x: T): T | null {
        for (const a of this.a) {
            if (a[a.length - 1] >= x) {
                return a[bisectLeft(a, x)];
            }
        }
        return null;
    }

    get(x: number): T {
        if (x < 0) x += this.size;
        if (x < 0) throw new Error("IndexError");
        for (const a of this.a) {
            if (x < a.length) {
                return a[x];
            }
            x -= a.length;
        }
        throw new Error("IndexError");
    }

    index(x: T): number {
        let ans = 0;
        for (const a of this.a) {
            if (a[a.length - 1] >= x) {
                return ans + bisectLeft(a, x);
            }
            ans += a.length;
        }
        return ans;
    }

    indexRight(x: T): number {
        let ans = 0;
        for (const a of this.a) {
            if (a[a.length - 1] > x) {
                return ans + bisectRight(a, x);
            }
            ans += a.length;
        }
        return ans;
    }
}