var checkInclusion = function (s1, s2) {
  const l1 = s1.length,
    l2 = s2.length;

  if (l1 > l2) {
    return false;
  }

  const count = new Array(26).fill(0);

  for (let i = 0; i < l1; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }

  if (count.every((n) => n === 0)) {
    return true;
  }

  for (let i = l1; i < l2; i++) {
    count[s2.charCodeAt(i) - 97]--;
    // Scan sub string with length = s1.length
    count[s2.charCodeAt(i - l1) - 97]++;

    if (count.every((n) => n === 0)) {
      return true;
    }
  }

  return false;
};

// Test case 1
// const s1 = "ab", s2 = "eidbaooo";

// Test case 2
const s1 = "ab", s2 = "eidboaoo";

console.log(checkInclusion(s1, s2));