/**
 * 410. Split Array Largest Sum
 * Array, Binary Search, Dynamic Programming, Greedy
 */

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = (nums, m) => {
  let max = Math.max(...nums);
  let sum = nums.reduce((s, n) => s + n, 0);
  // let [max, sum] = nums.reduce((acc, num) => [Math.max(acc[0], num), acc[1] + num], [0, 0]);
  if (m === 1) return sum;
  //binary search
  let l = max,
    r = sum;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (valid(mid, nums, m)) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
};
var valid = (target, nums, m) => {
  let count = 1;
  let total = 0;
  for (let num of nums) {
    total += num;
    if (total > target) {
      total = num;
      count++;
      if (count > m) {
        return false;
      }
    }
  }
  return true;
};

splitArray([1, 2, 3, 4, 5], 2);
