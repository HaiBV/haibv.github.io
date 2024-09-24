// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(x, y){
  // write your code in JavaScript
  let i = 0, j = 0;

  while (i < x.length && j < y.length) {
      if (x[i] === y[j]) {
          i++;
          j++
      } else {
          i++;
      }
  }

  return j === y.length;
}
