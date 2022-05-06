/**
 * 1209. Remove All Adjacent Duplicates in String II
 * String, Stack
 */

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
  const stack = [];

  for (let char of s) {
    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1] += 1;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([char, 1]);
    }
  }

  return stack.reduce((acc, [char, count]) => acc + char.repeat(count), "");
};
