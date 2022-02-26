/**
 * 42. Trapping Rain Water
 * Array, Two Pointers, Dynamic Programming, Stack, Monotonic Stack
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  let maxleft = 0;
  let maxright = 0;

  while (left <= right) {
    if (height[left] <= height[right]) {
      if (height[left] >= maxleft) maxleft = height[left];
      else res += maxleft - height[left];
      left++;
    } else {
      if (height[right] >= maxright) maxright = height[right];
      else res += maxright - height[right];
      right--;
    }
  }
  return res;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]); // 6
trap([4, 2, 0, 3, 2, 5]); // 9

// Here is my idea: instead of calculating area by height*width, we can think it in a cumulative way. In other words, sum water amount of each bin(width=1).
// Search from left to right and maintain a max height of left and right separately, which is like a one-side wall of partial container. Fix the higher one and flow water from the lower part. For example, if current height of left is lower, we fill water in the left bin. Until left meets right, we filled the whole container.
