/**
 * 47. Permutations II
 * Array, Backtracking
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [],
    remain = [],
    set = new Set(nums);
  nums.forEach((num) => (remain[num] ? remain[num]++ : (remain[num] = 1)));

  function permute(depth, remain, cur) {
    if (depth == nums.length) {
      res.push(cur.slice());
      return;
    }
    for (let num of set) {
      if (remain[num]) {
        cur.push(num);
        remain[num]--;

        // move to the next depth
        permute(depth + 1, remain, cur);

        // backtrack to previous state
        cur.pop();
        remain[num]++;
      }
    }
    return res;
  }
  return permute(0, remain, []);
};
