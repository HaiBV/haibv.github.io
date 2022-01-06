// 125. Valid Palindrome
// Two points
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) {
    return true;
  }
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    switch (true) {
      case !/[a-zA-Z0-9]/.test(s[start]):
        start++;
        break;
      case !/[a-zA-Z0-9]/.test(s[end]):
        end--;
        break;
      case s[start].toLowerCase() !== s[end].toLowerCase():
        return false;
      default:
        start++;
        end--;
        break;
    }
  }

  return true;
};
