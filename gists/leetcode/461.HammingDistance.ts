/**
 * 461. Hamming Distance
 * Bit Manipulation
 */

function hammingDistance(x: number, y: number): number {
  return (x ^ y).toString(2).replace(/0/g, '').length;
}
