/**
 * 49. Group Anagrams
 * String, Hash Table, Sorting
 */

var groupAnagramsWithSort = function (strs) {
  let obj = {};
  for (let str of strs) {
    let letters = str.split('').sort().join('');
    obj[letters] ? obj[letters].push(str) : (obj[letters] = [str]);
  }
  return Object.values(obj);
};

var groupAnagramsWithHash = function (strs) {
  let res = {};
  for (let str of strs) {
    let count = new Array(26).fill(0);
    for (let char of str) count[char.charCodeAt() - 97]++;
    let key = count.join('#');
    res[key] ? res[key].push(str) : (res[key] = [str]);
  }
  return Object.values(res);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 *
 * key point:
 * prime multiply prime is unique, each char canbe represented by a prime
 * since [a-z] to  [0-25]
 * use `[charCodeAt() - 97]` to get unique index from the prime array
 * the prodcut can be set to the key name "prod"
 **/
var groupAnagramsWithPrime = function (strs) {
  const map = {};
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  strs.forEach((str) => {
    let prod = str.split('').reduce((r, c) => r * primes[c.charCodeAt() - 97], 1);
    map[prod] ? map[prod].push(str) : (map[prod] = [str]);
  });
  return Object.values(map);
};
