type Graph = { [key: number]: number[] };

export const eulerTour = (n: number, graph: Graph, root: number): [number[], number[], number[]] => {
    const parent: number[] = Array(n).fill(-1);
    const stack: number[] = [~root, root];
    let currTime: number = -1;
    const tour: number[] = [];
    const inTime: number[] = Array(n).fill(-1);
    const outTime: number[] = Array(n).fill(-1);

    while (stack.length > 0) {
        const currNode: number = stack.pop() as number;
        currTime += 1;

        if (currNode >= 0) {
            tour.push(currNode);
            if (inTime[currNode] === -1) {
                inTime[currNode] = currTime;
            }

            for (const nextNode of graph[currNode]) {
                if (nextNode !== parent[currNode]) {
                    parent[nextNode] = currNode;
                    stack.push(~nextNode);
                    stack.push(nextNode);
                }
            }
        } else {
            outTime[~currNode] = currTime;
            if (parent[~currNode] !== -1) {
                tour.push(parent[~currNode]);
            }
        }
    }
    return [tour, inTime, outTime];
}
