/**
 * 204. Count Primes
 * Array, Math, Enumeration, Number Theory
 *
 * Sieve of Eratosthenes solution
 */
function countPrimes(n: number): number {
  let isPrime = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (!isPrime[i]) {
      continue;
    }
    for (let j = i * i; j < n; j += i) {
      isPrime[j] = false;
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    count += isPrime[i] ? 1 : 0;
  }

  return count;
}
