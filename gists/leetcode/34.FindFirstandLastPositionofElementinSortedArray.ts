/**
 * 34. Find First and Last Position of Element in Sorted Array
 *
 * Array, Binary Search
 */

function searchRange(nums: number[], target: number): number[] {
  const find = function (arr, target, left = 0, right = arr.length) {
    while (left <= right) {
      let mid = (left + right) >> 1;
      if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return left;
  };

  let Tleft = find(nums, target);
  if (nums[Tleft] !== target) {
    return [-1, -1];
  }
  return [Tleft, find(nums, target + 1, Tleft) - 1];
}

// Example 1:
// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:
// Input: nums = [], target = 0
// Output: [-1,-1]
