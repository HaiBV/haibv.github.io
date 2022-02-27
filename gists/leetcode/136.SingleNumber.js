/**
 * 136. Single Number
 * Array, Bit Manipulation
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const sortNums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if ((i === 0 && sortNums[i] !== sortNums[i + 1]) || (i === nums.length - 1 && sortNums[i] !== sortNums[i - 1])) {
      return sortNums[i];
    }

    if (sortNums[i] !== sortNums[i - 1] && sortNums[i] !== sortNums[i + 1]) {
      return sortNums[i];
    }
  }
};

singleNumber([2, 2, 1]); // 1

singleNumber([4, 1, 2, 1, 2]); // 4

singleNumber([1]); // 1
