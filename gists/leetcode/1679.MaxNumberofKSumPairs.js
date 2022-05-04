/**
 * 1679. Max Number of K-Sum Pairs
 * Array, Hash Table, Two Points, Sorting
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperationsHashMap = function (nums, k) {
  let map = new Map();
  let count = 0;
  for (let each of nums) {
    if (map.has(each)) {
      map.set(each, map.get(each) - 1);
      map.get(each) === 0 && map.delete(each);
      count++;
    } else {
      map.set(k - each, map.get(k - each) + 1 || 1);
    }
  }
  return count;
};
