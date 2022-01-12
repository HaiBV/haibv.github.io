/**
 * 53. Maximum Subarray
 * Array, Divide and Conquer, Dynamic Programming
 */
function maxSubArray(nums: number[]): number {
  let max: number = nums[0];
  let maxCur: number[] = [];

  maxCur[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxCur[i] = nums[i] + Math.max(maxCur[i - 1], 0);
    max = Math.max(maxCur[i], max);
  }

  return max;
}

// nums = [-2,1,-3,4,-1,2,1,-5,4]
// nums = [1]
// nums = [5,4,-1,7,8]
