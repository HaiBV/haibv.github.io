/**
 * 1584. Min Cost to Connect All Points
 * Array, Union Find, Mininum Spanning Tree
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let cost = 0;
  const n = points.length;
  const dist = Array(n).fill(Infinity);
  dist[0] = 0;
  let next = 0;

  for (let step = 1; step < n; step++) {
    let min = Infinity;
    let point = -1;
    for (let i = 1; i < n; i++) {
      if (dist[i] > 0) {
        dist[i] = Math.min(dist[i], Math.abs(points[i][0] - points[next][0]) + Math.abs(points[i][1] - points[next][1]));
        if (dist[i] < min) {
          min = dist[i];
          point = i;
        }
      }
    }
    cost += min;
    dist[point] = 0;
    next = point;
  }

  return cost;
};
