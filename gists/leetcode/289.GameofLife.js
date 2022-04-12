/**
 * 289. Game of Life
 * Array, Matrix, Simulation
 */

var gameOfLife = function (board) {
  const m = board.length;
  const n = board[0].length;
  const dirs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveCount = dirs.reduce((counter, [r, c]) => {
        let [nr, nc] = [i + r, j + c];
        if (0 <= nr && nr < m && 0 <= nc && nc < n && Math.abs(board[nr][nc]) === 1) {
          return counter + 1;
        }
        return counter;
      }, 0);

      if (board[i][j] === 1) {
        if (liveCount < 2 || liveCount > 3) {
          board[i][j] = -1;
        }
      } else {
        if (liveCount === 3) {
          board[i][j] = 2;
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      switch (true) {
        case board[i][j] === -1:
          board[i][j] = 0;
          break;
        case board[i][j] === 2:
          board[i][j] = 1;
          break;
        default:
          break;
      }
    }
  }
};

console.log(
  gameOfLife([
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ])
);
