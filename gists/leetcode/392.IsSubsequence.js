/**
 * 392. Is Subsequence
 * Two Pointers, String, Dynamic Programming
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0,
    j = 0;
  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
    }
    j++;
  }
  return i === s.length ? true : false;
};

isSubsequence('abc', 'ahbgdc'); // true

isSubsequence('axc', 'ahbgdc'); // false
