/**
 * 128. Longest Consecutive Sequence
 * Array, Hash Table, Union Find
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;

  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue; // make sure starting from the beginning of sequence

    let y = num + 1;

    while (set.has(y)) {
      y += 1;
    }
    max = Math.max(max, y - num);
  }

  return max;
}

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
// console.log(longestConsecutive([0]));
console.log(longestConsecutive([1, 0, -1]));
