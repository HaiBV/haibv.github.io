/**
 * 394. Decode String
 * String, Stack, Recursion
 */

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  let arr = s.split('');
  let stack = [];
  let curNum = 0;
  let curString = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '[') {
      stack.push(curString);
      stack.push(curNum);
      curString = '';
      curNum = 0;
    } else if (arr[i] === ']') {
      let num = stack.pop();
      let str = stack.pop();
      curString = str + curString.repeat(num);
    } else if (!Number.isNaN(Number(arr[i]))) {
      curNum = curNum * 10 + Number(arr[i]);
    } else {
      curString += arr[i];
    }
  }

  return curString;
};

decodeString('3[a]2[bc]'); // "aaabcbc"
decodeString('3[a2[c]]'); // "accaccacc"
decodeString('2[abc]3[cd]ef'); // "abcabccdcdcdef"
