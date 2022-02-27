/**
 * 169. Majority Element
 * Array, Hash Table, Divide and Conquer, Sorting, Counting
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] === undefined) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }

    if (hash[nums[i]] > Math.floor(nums.length / 2)) {
      return nums[i];
    }
  }
};
