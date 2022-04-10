/**
 * 682. Baseball Game
 * Array, Stack, Simulation
 */

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [];

  for (let op of ops) {
    switch (true) {
      case op === '+':
        let p = stack[stack.length - 1] + stack[stack.length - 2];
        stack.push(p);
        break;
      case op === 'C':
        stack.pop();
        break;
      case op === 'D':
        let d = stack[stack.length - 1] * 2;
        stack.push(d);
        break;
      default:
        stack.push(+op);
    }
  }

  return stack.reduce((a, n) => a + n, 0);
};

calPoints(['5', '2', 'C', 'D', '+']); // 30
// calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']); // 27
// calPoints(['1']); // 1
