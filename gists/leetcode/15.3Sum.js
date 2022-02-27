/**
 * 15. 3Sum
 * Array, Two Pointers, Sorting
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const output = [];
  const a = nums.sort((a, b) => a - b);
  const n = nums.length;
  const sum = 0;

  const f = new Set();
  for (var i = 0; i < n - 2; i += 1) {
    if (!f.has(a[i])) {
      let start = i + 1,
        end = n - 1;
      let target = sum - a[i];

      while (start < end) {
        if (start > i + 1 && a[start] === a[start - 1]) {
          start += 1;
          continue;
        }

        if (end < n - 1 && a[end] === a[end + 1]) {
          end -= 1;
          continue;
        }

        if (a[start] + a[end] === target) {
          output.push([a[i], a[start], a[end]]);
          start += 1;
          end -= 1;
          continue;
        }

        if (a[start] + a[end] > target) {
          end -= 1;
        } else {
          start += 1;
        }
      }

      f.add(a[i]);
    }
  }

  return output;
};

threeSum([-1, 0, 1, 2, -1, -4]); // [[-1,-1,2],[-1,0,1]]

threeSum([]); // []

threeSum([0]); // []
