// Hashmap

var firstUniqChar = function (s) {
  let hash = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    hash[s.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < s.length; i++) {
    if (hash[s.charCodeAt(i) - 97] === 1) {
      return i;
    }
  }

  return -1;
};
