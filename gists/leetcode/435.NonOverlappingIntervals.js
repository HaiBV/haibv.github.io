/**
 * 435. Non-overlapping Intervals
 * Array, Dynamic Programming, Greedy, Sorting
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervalsGreedy = function (intervals) {
  // sort by earliest finish time
  intervals.sort((a, b) => a[1] - b[1]);
  let prev = intervals[0],
    remove = 0;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) remove++;
    else prev = intervals[i];
  }
  return remove;
};

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length == 0) return 0;

  intervals.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));
  let end = intervals[0][1];
  let count = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count++;
    }
  }
  return intervals.length - count;
};

eraseOverlapIntervals([
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 3],
]); // 1

eraseOverlapIntervals([
  [1, 2],
  [1, 2],
  [1, 2],
]); // 2

eraseOverlapIntervals([
  [1, 2],
  [2, 3],
]); // 0
eraseOverlapIntervals([
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
]); // 2
eraseOverlapIntervals([
  [-52, 31],
  [-73, -26],
  [82, 97],
  [-65, -11],
  [-62, -49],
  [95, 99],
  [58, 95],
  [-31, 49],
  [66, 98],
  [-63, 2],
  [30, 47],
  [-40, -26],
]); // 7
