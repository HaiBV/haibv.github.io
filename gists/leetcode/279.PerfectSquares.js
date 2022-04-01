/**
 * 279. Perfect Squares
 * Math, Dynamic Programming, BFS
 */

// Based on Lagrange's Four Square theorem, there are only 4 possible results: 1, 2, 3, 4.

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const isSquare = (x) => Math.floor(Math.sqrt(x)) ** 2 === x;
  // If n is a perfect square, return 1.
  if (isSquare(n)) {
    return 1;
  }

  // The result is 4 if and only if n can be written in the
  // form of 4^k*(8*m + 7). Please refer to
  // Legendre's three-square theorem.
  while ((n & 3) == 0) {
    // n%4 == 0
    n >>= 2;
  }
  if ((n & 7) == 7) {
    // n%8 == 7
    return 4;
  }

  // Check whether 2 is the result.
  let sqrt_n = Math.floor(Math.sqrt(n));
  for (let i = 1; i <= sqrt_n; i++) {
    if (isSquare(n - i * i)) {
      return 2;
    }
  }

  return 3;
};
