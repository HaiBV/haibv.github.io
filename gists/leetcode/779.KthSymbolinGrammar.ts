/**
 * 779. K-th Symbol in Grammar
 * Math, Bit Manipulation, Recursion
 */

function kthGrammar(n: number, k: number): number {
  if (k <= 1) return 0;
  let mid = Math.ceil(k / 2);
  return kthGrammar(n, mid) === k % 2 ? 1 : 0;
}
