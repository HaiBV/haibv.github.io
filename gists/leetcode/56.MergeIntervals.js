/**
 * 56. Merge Intervals
 * Array, Sorting
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals.length) return intervals;
  intervals.sort((a, b) => (a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]));
  var prev = intervals[0];
  var res = [prev];
  for (var curr of intervals) {
    if (curr[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      res.push(curr);
      prev = curr;
    }
  }
  return res;
}

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]); // [[1,6],[8,10],[15,18]]

merge([
  [1, 4],
  [4, 5],
]); // [[1,5]]
