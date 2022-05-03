/**
 * 581. Shortest Unsorted Continuous Subarray
 * Array, Two Points, Stack, Greedy, Sorting, Monotoic Stack
 */

var findUnsortedSubarray = function (nums) {
  let end = -1;
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (max > nums[i]) {
      // the left value is greater then current value
      end = i; // mark that index with end
    } else {
      max = nums[i];
    }
  }

  let start = 0;
  let min = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    if (min < nums[i]) {
      // the right value is smaller then current value
      start = i; // mark that index with start
    } else {
      min = nums[i];
    }
  }
  return end - start + 1;
};
