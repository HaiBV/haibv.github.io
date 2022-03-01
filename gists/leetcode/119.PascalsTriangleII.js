/**
 * 119. Pascal's Triangle II
 * Array, Dynamic Programming
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let triangle = [];
  triangle[0] = [1];

  for (let i = 1; i <= rowIndex; i++) {
    triangle[i] = [1];
    for (let j = 1; j < i; j++) {
      triangle[i].push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
    }
    triangle[i].push(1);
  }

  return triangle[rowIndex];
};

getRow(3); // [1,3,3,1]
getRow(0); // [1]
getRow(1); // [1,1]
