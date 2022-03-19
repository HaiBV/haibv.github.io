/**
 * 997. Find the Town Judge
 * Array, Hash Table, Graph
 */

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const Trusted = new Array(n + 1).fill(0);
  for (let [i, j] of trust) {
    Trusted[i] -= 1;
    Trusted[j] += 1;
  }
  for (let i = 1; i < Trusted.length; i++) {
    if (n - 1 === Trusted[i]) {
      return i;
    }
  }
  return -1;
};

findJudge(2, [[1, 2]]); // 2

findJudge(3, [
  [1, 3],
  [2, 3],
]); // 3

findJudge(3, [
  [1, 3],
  [2, 3],
  [3, 1],
]); // -1
