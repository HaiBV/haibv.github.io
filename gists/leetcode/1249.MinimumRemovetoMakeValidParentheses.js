/**
 * 1249. Minimum Remove to Make Valid Parentheses
 */

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let minStr = s.split('');
  let stack = [];
  for (let i = 0; i < minStr.length; i++) {
    if (minStr[i] === '(') {
      stack.push(i);
    }
    if (minStr[i] === ')') {
      if (stack.length > 0) {
        stack.pop();
      } else {
        minStr[i] = '*';
      }
    }
  }
  while (stack.length > 0) {
    minStr[stack.pop()] = '*';
  }

  return minStr.reduce((acc, char) => char !== "*" ? `${acc}${char}` : acc, '');
};

console.log(minRemoveToMakeValid('lee(t(c)o)de)')); // "lee(t(c)o)de"

console.log(minRemoveToMakeValid('a)b(c)d')); // "ab(c)d"

console.log(minRemoveToMakeValid('))((')); // ""
