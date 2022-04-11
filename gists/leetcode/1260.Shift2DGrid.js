/**
 * 1260. Shift 2D Grid
 * Array, Matrix, Simulation
 */

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
  const m = grid.length;
  const n = grid[0].length;
  const shift = k % (n * m);

  if (shift === 0) {
    return grid;
  }

  let flatGrid = grid.flat();

  console.log(flatGrid.slice(n * m - shift));
  console.log(flatGrid.slice(0, n * m - shift));
  let shiftedGrid = [...flatGrid.slice(n * m - shift), ...flatGrid.slice(0, n * m - shift)];

  let result = [];
  for (let i = 0; i < m; i++) {
    result.push(shiftedGrid.slice(i * n, (i + 1) * n));
  }

  return result;
};

console.log(
  shiftGrid(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    1
  )
);

console.log(
  shiftGrid(
    [
      [3, 8, 1, 9],
      [19, 7, 2, 5],
      [4, 6, 11, 10],
      [12, 0, 21, 13],
    ],
    4
  )
);
console.log(shiftGrid([[1], [2], [3], [4], [7], [6], [5]], 23));
