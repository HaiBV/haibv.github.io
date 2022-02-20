/**
 * 647. Palindromic Substrings
 * String, Dynamic Programming
 */

function countSubstrings(s) {
  const l = s.length;
  let counter = 0;

  for (let i = 0; i < l; i++) {
    let j = i - 1;
    let k = i;
    while (k < l - 1 && s[k] === s[k + 1]) {
      k++;
    }

    counter += ((k - j) * (k - j + 1)) / 2;
    i = k++;

    while (j >= 0 && k < l && s[j] === s[k]) {
      k++;
      j--;
      counter++;
    }
  }

  return counter;
}
