/**
 * 131. Palindrome Partitioning
 * String, Dynamic Programming, Backtracking
 */

import stringIsPalindrome from '../ultis/stringIsPalindrome';

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];

  function permute(arr, str) {
    if (!str.length) result.push(arr);

    for (let i = 1; i <= str.length; i++) {
      const subStr = str.slice(0, i);
      if (stringIsPalindrome(subStr)) {
        permute([...arr, subStr], str.slice(i));
      }
    }
  }
  permute([], s);
  return result;
};

// s = "aab" // => [["a","a","b"],["aa","b"]]
// s = "a" // => [["a"]]
