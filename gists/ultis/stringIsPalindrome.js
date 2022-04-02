export default function stringIsPalindrome(str, l, r) {
  let left = l || 0,
    right = r || str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
