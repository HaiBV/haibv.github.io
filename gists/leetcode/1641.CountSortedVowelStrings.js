/**
 * 1641. Count Sorted Vowel Strings
 * Dynamic Programming
 */

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  let res = 0;

  helper(n, 0);

  function helper(n, startIdx) {
    // base case
    if (n === 0) {
      res++;
      return;
    }

    // recursive case
    for (let i = startIdx; i < 5; i++) {
      helper(n - 1, i);
    }
  }

  return res;
};
