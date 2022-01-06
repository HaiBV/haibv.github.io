var rotate = function(matrix) {
  let l = matrix.length;
  
  for (let i = 0; i < Math.floor((l + 1) / 2); i++) {
      for (let j = 0; j < Math.floor(l / 2); j++) {
          let temp =  matrix[i][j];
          matrix[i][j] = matrix[l - 1 - j][i];
          matrix[l - 1 - j][i] = matrix[l - 1 - i][l - 1 - j];
          matrix[l - 1 - i][l - 1 - j] = matrix[j][l - 1 - i];
          matrix[j][l - 1 - i] = temp;
      }
  }
  
  console.log(matrix);
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
rotate(matrix);