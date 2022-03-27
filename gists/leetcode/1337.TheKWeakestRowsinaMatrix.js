/**
 * 1337. The K Weakest Rows in a Matrix
 * Array, Binary Search, Sorting, Heap, Matrix
 */

/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = (mat, k) =>
  mat
    //turn the array into [index, sum of soilders] form
    .map((e, i) => [i, e.reduce((acc, cur) => acc + cur, 0)])
    //sort the array: if the number of soilders is equal then sort with the index of the row
    .sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]))
    //take of the row index of the sorted result
    .map((x) => x[0])
    //slice the result according to k number
    .slice(0, k);
