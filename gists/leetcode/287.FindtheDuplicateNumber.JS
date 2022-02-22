/**
 * 287. Find the Duplicate Number
 * Array, Two Points, Binary Search, Bit Manipulation
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((high + low) / 2);
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        counter++;
      }
    }
    if (counter <= mid) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};
