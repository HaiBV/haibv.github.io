/**
 * 743. Network Delay Time
 * Graph, DFS, BFS, Heap, Shortest Path
 */

/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const arr = new Array(n).fill(Math.min());

  arr[k - 1] = 0;

  let iterate = true;
  while (iterate) {
    iterate = false;
    for (let [src, target, timeTaken] of times) {
      src -= 1;
      target -= 1;

      if (arr[src] === Math.min()) {
        continue;
      }
      if (arr[target] > arr[src] + timeTaken) {
        arr[target] = arr[src] + timeTaken;
        iterate = true;
      }
    }
  }
  let max = Math.max(...arr);
  return max === Math.min() ? -1 : max;
};
