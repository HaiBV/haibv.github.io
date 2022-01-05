var generate = function(numRows) {
  let nums = [];
  
  for (let i = 0; i < numRows; i++) {
      nums[i] = [];
      nums[i][0] = 1;
      
      for (let j = 1; j < i; j++) {
          nums[i][j] = nums[i - 1][j - 1] + nums[i - 1][j];
      }
      nums[i][i] = 1;
  }
  
  return nums;
};

console.log(generate(5));