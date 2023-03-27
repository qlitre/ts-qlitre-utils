import { BinaryHeap } from "../datastructure/BinaryHeap"

/**
 * トポロジカルソートした配列を返す
 * ※できない場合は空の配列
 * @param n 頂点数
 * @param graph {0:[1,2,3],4:[5]...}
 * @param intoNum 次数の配列
 * @returns 
 */
export const topologicalSort = (n: number, graph: Record<number, number[]>, intoNum: number[]): number[] => {
    const que = new BinaryHeap<number>((a, b) => a - b)
    for (let i = 0; i < n; i++) {
        if (intoNum[i] == 0) {
            que.push(i)
        }
    }
    const ret: number[] = []
    while (que.size() > 0) {
        const now = que.pop()
        if (now == undefined) continue
        ret.push(now + 1)
        if (graph[now]) {
            for (const adj of graph[now]) {
                intoNum[adj]--
                if (intoNum[adj] == 0) {
                    que.push(adj)
                }
            }
        }
    }
    if (ret.length == n) {
        return ret
    } else {
        return []
    }
}