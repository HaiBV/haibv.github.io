/**
 * 413. Arithmetic Slices
 * Array, Dynamic Programming
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let curr = 0;
  let sum = 0;
  for (let i = 2; i < nums.length; i++)
    if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
      curr += 1;
      sum += curr;
    } else {
      curr = 0;
    }
  return sum;
};
