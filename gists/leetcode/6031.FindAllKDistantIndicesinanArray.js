/**
 * 6031. Find All K-Distant Indices in an Array
 * 
 * Weekly Contest 284
 */

/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  let keyIndexs = [];
  for (i in nums) {
    if (nums[i] === key) {
      keyIndexs.push(+i);
    }
  }

  let indices = [];
  for (i of keyIndexs) {
    for (let j = i - k; j <= i + k; j++) {
      indices.push(j);
    }
  }

  return [...new Set(indices.filter((i) => i >= 0 && i < nums.length))];
};

console.log(findKDistantIndices([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 5));