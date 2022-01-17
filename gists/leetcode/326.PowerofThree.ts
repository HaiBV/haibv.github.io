/**
 * 326. Power of Three
 * Math, Recursion
 */

// n.toString(3) uses the concept of radix and makes number n into a string with a base of 3, a ternary number
// So if n was a power of 3, n.toString(3) would be 1, 10, 100, or 10...0 .
// use split() to make the string into an array
// use reduce() to count the total of each digit
// if the total is equal to 1, the number n is a power of 3
function isPowerOfThree(n: number): boolean {
  return /^10*$/.test(n.toString(3));
}

function isPowerOfThreeWithStaticValue(n: number): boolean {
  // 1162261467 is 3^19,  3^20 is bigger than int
  return n > 0 && 1162261467 % n == 0;
}
