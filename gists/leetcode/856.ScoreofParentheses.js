/**
 * 856. Score of Parentheses
 * String, Stack
 */

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let score = 0;
  let stack = [];
  let arr = s.split('');

  for (let c of arr) {
    if (c === '(') {
      stack.push(score);
      score = 0;
    } else {
      score = stack.pop() + Math.max(score * 2, 1);
    }
  }

  return score;
};

scoreOfParentheses('()'); // 1

scoreOfParentheses('(())'); // 2

scoreOfParentheses('()()'); // 2
