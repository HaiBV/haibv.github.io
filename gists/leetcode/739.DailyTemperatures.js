/**
 * 739. Daily Temperatures
 * Array, Stack, Monotonic Stack
 */

function dailyTemperatures(temperatures) {
  let res = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        res[i] = j - i;
        break;
      }
    }
  }

  return res;
}

var dailyTemperaturesStack = function (T) {
  let stack = [];
  let result = new Array(T.length).fill(0);
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length) {
      result[i] = stack[stack.length - 1] - i;
    }
    stack.push(i);
  }
  return result;
};

// const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
// const temperatures = [30, 40, 50, 60];
// console.log(dailyTemperaturesStack(temperatures));
