/**
 * 1823. Find the Winner of the Circular Game
 * Math, Array, Recursion, Queue, Simulation
 */

//  In the end,n = 1,
//  the index of winner index is 0 (base-0)
 
//  We think with one step back,
//  when n = 2,
//  the index of winner is 0 + k,
//  but we have only n peopple,
//  so the winner index is (0 + k) % 2 (base-0)
 
//  We think with one more step back,
//  when n = 3,
//  the index of winner is f(2) + k,
//  but we have only n peopple,
//  so the winner index is (f(2) + k) % 3 (base-0)
 
//  We think with n more step back,
//  the index of winner is f(n-1) + k,
//  but we have only n peopple,
//  so the winner index is (f(n-1) + k) % n (base-0)
 
//  Done.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let res = 0;
  for (let i = 1; i <= n; ++i) {
    res = (res + k) % i;
  }
  return res + 1;
};

findTheWinner(5, 2); // 3
findTheWinner(6, 5); // 1
