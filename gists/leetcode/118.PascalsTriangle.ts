/**
 * 118. Pascal's Triangle
 * Array, Dynamic Programming
 */

function generate(numRows: number): number[][] {
  let triangle: number[][] = [];
  triangle[0] = [1];
  for (let i = 1; i < numRows; i++) {
    triangle[i] = [1];

    for (let j = 1; j < i; j++) {
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle[i].push(1);
  }

  return triangle;
}

console.log(generate(5));
