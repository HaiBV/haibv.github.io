/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const binarySearch = function (nums, target) {
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    let index = Math.floor((start + end) / 2);

    if (nums[index] === target) {
      return index;
    }

    if (nums[index] < target) {
      start = index + 1;
    } else {
      end = index - 1;
    }
  }

  return -1;
};
