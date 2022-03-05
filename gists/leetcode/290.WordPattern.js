/**
 * 290. Word Pattern
 * Hash Table, String
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  const words = str.split(/\s+/);
  const map = new Map();

  if (words.length !== pattern.length) return false;
  if (new Set(words).size !== new Set(pattern).size) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (map.has(pattern[i]) && map.get(pattern[i]) !== words[i]) return false;
    map.set(pattern[i], words[i]);
  }
  return true;
};

wordPattern('abba', 'dog cat cat dog'); // true

wordPattern('abba', 'dog cat cat fish'); // false

wordPattern('aaaa', 'dog cat cat dog'); // false

wordPattern('abba', 'dog cat cat dog'); // false

wordPattern('abc', 'dog cat dog'); // false
