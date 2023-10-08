/**
 * 1512. Number of Good Pairs
 * Array, Math, Hash Table, Counting
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const hash = {};
  let count = 0;

  for (let num of nums) {
    if (hash[num]) {
      count += hash[num]++;
    } else {
      hash[num] = 1;
    }
  }
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]));
