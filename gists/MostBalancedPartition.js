function mostBalancedPartition(parent, files_size) {
  const structure = createStructure(parent);
  let min = Number.MAX_VALUE;
  const parentAray = Object.keys(structure);
  const rootSum = calculateChildSum(0, structure, files_size, -1);
  for (let i = 0; i < parentAray.length; i++) {
    const childArray = structure[parentAray[i]];
    for (let j = 0; j < childArray.length; j++) {
      const childSum = calculateChildSum(childArray[j], structure, files_size, -1);
      const diff = Math.abs(rootSum - 2 * childSum);
      if (diff < min) {
        min = diff;
      }
    }
  }
  return min;
}

function calculateChildSum(parent, structure, files_size, excludedChild) {
  let sum = 0;
  if (!structure[parent])
    return files_size[parent];
  let stack = [parent];
  while (stack.length != 0) {
    const top = stack.pop();
    if (structure[top]) {
      const children = structure[top];
      stack = [...stack, ...structure[top]];
    }
    sum += files_size[top];
  }
  return sum;
}

function createStructure(parent) {
  const structure = {};
  for (let i = 1; i < parent.length; i++) {
    if (!structure[parent[i]]) {
      structure[parent[i]] = [];
      structure[parent[i]].push(i);
    } else
      structure[parent[i]].push(i);
  }
  return structure;
}

console.log(mostBalancedPartition([-1, 0, 1, 2], [1, 4, 3, 4]));
// https://stackoverflow.com/questions/63999102/balanced-system-files-partition-coding-challenge