/**
 * 43. Multiply Strings
 * Math, String, Simulation
 */

//  `num1[i] * num2[j]` will be placed at indices `[i + j`, `i + j + 1]`
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let m = num1.length;
  let n = num2.length;
  let pos = new Array(m + n);

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      let mul = +num1[i] * +num2[j];
      let p1 = i + j;
      let p2 = i + j + 1;

      let sum = mul + (pos[p2] || 0);

      pos[p1] = (pos[p1] || 0) + Math.floor(sum / 10);
      pos[p2] = sum % 10;
    }
  }

  return pos.join('').replace(/^0*/, '');
};

console.log(multiply('2', '3'));
