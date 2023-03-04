/**
 * 
 * @param arr ソート済みの配列
 * @param x 検索値
 * @returns 
 * 値 x が最後に現れるインデックスを返す。
 * x が arr 内に存在しない場合は、x を挿入するためのインデックスを返す
 */
export const bisectRight = (arr: number[], x: number, lo: number = 0, hi: number = arr.length): number => {
    while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] <= x) {
            lo = mid + 1;
        } else {
            hi = mid;
        }
    }
    return hi;
}