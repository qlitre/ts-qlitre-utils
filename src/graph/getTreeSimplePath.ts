import { Deque } from "../datastructure/Deque";

type Graph = Record<number, number[]>;

/**
 * 
 * @param n 頂点数
 * @param graph 隣接リスト
 * @param startVertex 開始頂点
 * @param endVertex 終了頂点
 * @returns 最短距離のパスを返す
 */
export const getTreeSimplePath = (n: number, graph: Graph, startVertex: number, endVertex: number): number[] | -1 => {
    const vis = new Set<number>();
    const que = new Deque<number>()
    que.append(startVertex)
    vis.add(startVertex);
    const root = Array<number>(n + 1).fill(-1);

    // 幅優先探索してルートを記録
    while (que.getLength()) {
        const now = que.popleft();
        if (!now) continue
        if (now === endVertex) {
            break;
        }
        const conn = graph[now];
        for (const adj of conn) {
            if (vis.has(adj)) {
                continue;
            } else {
                vis.add(adj);
                que.append(adj);
                root[adj] = now;
            }
        }
    }

    let idx = endVertex;
    const ret = [endVertex];
    while (true) {
        const bef = root[idx];
        if (bef === startVertex) {
            ret.push(startVertex);
            break;
        } else if (bef === -1) {
            return -1;
        } else {
            ret.push(bef);
            idx = bef;
        }
    }

    ret.reverse();
    return ret;
}