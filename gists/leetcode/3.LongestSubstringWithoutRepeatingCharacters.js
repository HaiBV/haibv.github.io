/**
 * 3. Longest Substring Without Repeating Characters
 * Hash Table, String, Sliding Window
 */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let max = 0;
  let curMaxStr = "";

  for (let c of s) {
    if (curMaxStr.indexOf(c) > -1) {
      curMaxStr = curMaxStr.substring(curMaxStr.indexOf(c) + 1);
    }

    curMaxStr += c;
    max = Math.max(max, curMaxStr.length);
  }

  return max;
};
