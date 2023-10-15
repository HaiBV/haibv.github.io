import TreeNode, { sampleRoot } from "../../dataStructures/TreeNode";

const df_stack = <T>(root: TreeNode<T> | null): Array<T> => {
  if (!root) {
    return [];
  }

  const stack = [root];
  const results: Array<T> = [];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current?.val) {
      results.push(current.val);
    }

    if (current?.right) {
      stack.push(current?.right);
    }

    if (current?.left) {
      stack.push(current.left);
    }
  }

  return results;
};

console.log(df_stack(sampleRoot));

const df_recursive = <T>(root: TreeNode<T> | null): Array<T> => {
  if (!root) {
    return [];
  }

  const leftValues = df_recursive(root.left);
  const rightValues = df_recursive(root.right);

  return [root.val, ...leftValues, ...rightValues];
};

console.log(df_recursive(sampleRoot));
