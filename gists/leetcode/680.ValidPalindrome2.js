/**
 * 680. Valid Palindrome II
 * Two Pointers, String, Greedy
 */

import stringIsPalindrome from '../ultis/stringIsPalindrome';

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = -1,
    r = s.length;
  while (++l < --r) {
    if (s.charAt(l) != s.charAt(r)) {
      return stringIsPalindrome(s, l + 1, r) || stringIsPalindrome(s, l, r - 1);
    }
  }
  return true;
};

console.log(validPalindrome('abca'));
