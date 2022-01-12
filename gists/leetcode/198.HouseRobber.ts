/**
 * 198. House Robber
 * Array, Dynamic Programming
 */
function rob(nums: number[]): number {
  return nums.reduce((acc, num) => [acc[1], Math.max(acc[0] + num, acc[1])], [0, 0])[1];
}

// nums = [1,2,3,1] => 4
// nums = [2,7,9,3,1] => 12
// nums = [2,1,1,2] => 4
