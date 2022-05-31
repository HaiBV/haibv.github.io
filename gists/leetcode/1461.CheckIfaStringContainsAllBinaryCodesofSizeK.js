/**
 * 1461. Check If a String Contains All Binary Codes of Size K
 * Hash table, String, Bit Manipulation, Rolling Hash, Hash Function
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
const hasAllCodes = function (s, k) {
  const set = new Set();
  for (let i = k; i <= s.length; i++) set.add(s.slice(i - k, i));
  return set.size == Math.pow(2, k);
};
