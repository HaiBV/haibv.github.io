/**
 * 318. Maximum Product of Word Lengths
 * Array, String, Bit Manipulation
 */

/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  const masks = words.map((word) => {
    let mask = 0;

    for (let i = 0; i < word.length; i++) {
      const c = word.charCodeAt(i) - 97;
      mask |= 1 << c;
    }

    return mask;
  });

  let ans = 0;

  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      if (masks[i] & masks[j]) {
        continue;
      }

      const length = words[i].length * words[j].length;
      ans = Math.max(ans, length);
    }
  }

  return ans;
};
