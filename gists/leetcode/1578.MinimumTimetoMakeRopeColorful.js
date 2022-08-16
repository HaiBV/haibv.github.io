/**
 * 1578. Minimum Time to Make Rope Colorful
 * Array, String, Dynamic Programming, Greedy
 * Finding max needed time in consecutive balloons
 */

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
const minCost = function (colors, neededTime) {
  let res = 0;
  for (let i = 0, max = 0; i < colors.length; i++) {
    res += neededTime[i];
    max = Math.max(max, neededTime[i]);
    if (colors[i] !== colors[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};

console.log(minCost("abaac", [1, 2, 3, 4, 5])); // 3
console.log(minCost("abaaac", [1, 2, 3, 5, 4, 6])); // 7
