import { BinaryHeap } from "../datastructure/BinaryHeap"

type Graph = {
    [key: number]: number[][]
}

/**
 * 
 * @param n 頂点数
 * @param graph {0:[[vertex,weight],[vertex,weight]],1:[[vertex,weight]]...}
 * @param startVertex 開始する頂点
 * @returns 最短距離の配列を返す
 */
export const getDijkstraDistance = (n: number, graph: Graph, startVertex: number): number[] => {
    const inf: number = Infinity
    const cur: number[] = []
    for (let i = 0; i < n; i++) {
        cur.push(inf)
    }
    cur[startVertex] = 0
    const heapq = new BinaryHeap<number[]>((a, b) => a[0] - b[0]);
    heapq.push([0, startVertex])
    const vis: Set<number> = new Set()

    while (heapq.size() > 0) {
        const now = heapq.pop()
        if (now == undefined) break
        const pos = now[1]
        if (vis.has(pos)) continue
        vis.add(pos)
        if (graph[pos]) {
            const adjList = graph[pos]
            adjList.forEach((elm) => {
                const vertex = elm[0]
                const cost = elm[1]
                const distance = cur[pos] + cost
                if (distance < cur[vertex]) {
                    cur[vertex] = distance
                    heapq.push([distance, vertex])
                }
            })
        }
    }
    return cur
}