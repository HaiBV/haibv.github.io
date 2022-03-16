/**
 * 946. Validate Stack Sequences
 * Array, Stack, Simulation
 */

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
const validateStackSequences = function (pushed, popped) {
  const stack = [];
  let i = 0;

  for (const el of pushed) {
    stack.push(el);
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }

  return pushed.length === i;
};

console.log(validateStackSequences([2, 1, 0], [1, 2, 0]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
