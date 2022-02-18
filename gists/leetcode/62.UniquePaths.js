/**
 * 62. Unique Paths
 * Math, Dynamic Programming, Combinatorics
 */

function uniquePaths(m, n) {
  let grid = new Array(n).fill(new Array(m));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (i == 0) grid[0][j] = 1;
      if (j == 0) grid[i][j] = 1;
      if (i != 0 && j != 0) {
        let up = grid[i - 1][j];
        let left = grid[i][j - 1];
        grid[i][j] = up + left;
      }
    }
  }
  return grid[n - 1][m - 1];
}
