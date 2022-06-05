/**
 * 52. N-Queens II
 * Backtracking
 */

/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  if (n === 1) return 1;
  let queue = Array(n)
    .fill(0)
    .map((val, key) => [key]);
  let answer = 0;
  let new_queue = [];
  let new_row = 1;
  while (queue.length) {
    let candidate = queue.pop();

    for (let new_col = 0; new_col < n; new_col++) {
      if (!candidate.some((col, row) => col === new_col || row - col === new_row - new_col || row + col === new_row + new_col)) {
        let new_candidate = [...candidate, new_col];
        if (new_candidate.length === n) {
          answer++;
        } else {
          new_queue.push(new_candidate);
        }
      }
    }

    if (!queue.length) {
      queue = new_queue;
      new_queue = [];
      new_row++;
    }
  }
  return answer;
};
