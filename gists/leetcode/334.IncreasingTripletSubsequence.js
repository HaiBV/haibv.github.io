/**
 * 334. Increasing Triplet Subsequence
 * Array, Greedy
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  let first = Number.POSITIVE_INFINITY;
  let second = Number.POSITIVE_INFINITY;

  for (const n of nums) {
    if (n <= first) {
      first = n;
    } else if (n <= second) {
      second = n;
    } else {
      return true;
    }
  }

  return false;
};

console.log(increasingTriplet([5, 4, 3, 2, 1])); // false
console.log(increasingTriplet([7, 2, 6, 4, 5])); // true
