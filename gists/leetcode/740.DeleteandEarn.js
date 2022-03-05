/**
 * 740. Delete and Earn
 * Array, Hash Table, Dynamic Programming
 */

// This question is a follow-up of this question : https://leetcode.com/problems/house-robber/ .
// Basically in this question we simply create a new array and store the occurences of each number in the newly created array
// and now we simply have to play with adjacent indexes just like we did in house robber.
// The only different part of the newly created array from the house-robber question is that we have to multiply the index
// with the value on index to properly count multiple occurences of the same number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarnBottomUp = function (nums) {
  let max = Number.NEGATIVE_INFINITY;

  for (let ctr = 0; ctr < nums.length; ctr++) max = Math.max(nums[ctr], max);

  let arr = new Array(max + 1).fill(0);

  for (let ctr = 0; ctr < nums.length; ctr++) arr[nums[ctr]] += 1;

  let dp = new Array(arr.length).fill(-1);

  dp[arr.length] = 0;
  dp[arr.length + 1] = 0;

  for (let ctr = arr.length - 1; ctr >= 0; ctr--) {
    dp[ctr] = Math.max(dp[ctr + 1], arr[ctr] * ctr + dp[ctr + 2]);
  }

  return dp[0];
};

var solve = function (nums, idx, dp) {
  if (idx >= nums.length) return 0;

  if (dp[idx] !== -1) return dp[idx];

  if (idx === nums.length - 1) return (dp[idx] = idx * nums[idx]);

  return (dp[idx] = Math.max(solve(nums, idx + 1, dp), idx * nums[idx] + solve(nums, idx + 2, dp)));
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarnTopDown = function (nums) {
  let max = Number.NEGATIVE_INFINITY;

  for (let ctr = 0; ctr < nums.length; ctr++) max = Math.max(nums[ctr], max);

  let arr = new Array(max + 1).fill(0);

  for (let ctr = 0; ctr < nums.length; ctr++) arr[nums[ctr]] += 1;

  let dp = new Array(arr.length).fill(-1);

  return solve(arr, 0, dp);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const map = {};
  for (const num of nums) {
    if (!(num in map)) map[num] = 0;
    map[num]++;
  }

  let prevSum = 0;
  let currSum = 0;
  let prevKey = -1;

  for (let key in map) {
    const m = Math.max(prevSum, currSum);
    key = parseInt(key);
    if (key - 1 !== prevKey) {
      currSum = key * map[key] + m;
      prevSum = m;
    } else {
      currSum = key * map[key] + prevSum;
      prevSum = m;
    }
    prevKey = key;
  }

  return Math.max(prevSum, currSum);
};
