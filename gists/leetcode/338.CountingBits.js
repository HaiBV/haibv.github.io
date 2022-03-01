/**
 * 338. Counting Bits
 * Dynamic Programming, Bit Manipulation
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let ans = [];
  for (let i = 0; i <= n; i++) {
    // sum is initialised as 0
    let sum = 0;
    let num = i;
    // while num not equals zero
    while (num != 0) {
      // we have to count 1's in binary representation of i, therefore % 2
      sum += num % 2 !== 0;
      num = Math.floor(num / 2);
    }
    // add sum to ans vector
    ans.push(sum);
  }
  // return
  return ans;
};

countBits(2); // [0, 1, 1]
countBits(5); // [0, 1, 1, 2, 1, 2]
