import TreeNode, { sampleRoot } from "../../dataStructures/TreeNode";

const bf_queue = <T>(root: TreeNode<T> | null): Array<T> => {
  if (!root) {
    return [];
  }

  const queue = [root];
  const results: Array<T> = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current?.val) {
      results.push(current.val);
    }

		if (current?.left) {
      queue.push(current.left);
    }

    if (current?.right) {
      queue.push(current?.right);
    }
  }

  return results;
};

console.log(bf_queue(sampleRoot));
