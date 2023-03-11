export class UnionFind {
    private parents: number[];

    constructor(private n: number) {
        this.parents = Array.from({ length: n }, () => -1);
    }

    find(x: number): number {
        if (this.parents[x] < 0) {
            return x;
        } else {
            this.parents[x] = this.find(this.parents[x]);
            return this.parents[x];
        }
    }

    union(x: number, y: number): void {
        x = this.find(x);
        y = this.find(y);

        if (x === y) {
            return;
        }

        if (this.parents[x] > this.parents[y]) {
            [x, y] = [y, x];
        }

        this.parents[x] += this.parents[y];
        this.parents[y] = x;
    }

    size(x: number): number {
        return -this.parents[this.find(x)];
    }

    same(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }

    members(x: number): number[] {
        const root = this.find(x);
        return Array.from({ length: this.n }, (_, i) => i).filter(i => this.find(i) === root);
    }

    roots(): number[] {
        return Array.from({ length: this.n }, (_, i) => i).filter(i => this.parents[i] < 0);
    }

    groupCount(): number {
        return this.roots().length;
    }

    allGroupMembers(): Map<number, number[]> {
        const groupMembers = new Map<number, number[]>();
        for (let member = 0; member < this.n; member++) {
            const root = this.find(member);
            if (!groupMembers.has(root)) {
                groupMembers.set(root, []);
            }
            groupMembers.get(root)!.push(member);
        }
        return groupMembers;
    }
}