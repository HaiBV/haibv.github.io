/**
 * 543. Diameter of Binary Tree
 * Binary Tree, DFS
 */

import TreeNode from '../dataStructures/TreeNode';

function diameterOfBinaryTree(root: TreeNode | null): number {
  let max = 0;
  function maxDepth(curRoot: TreeNode | null): number {
    if (curRoot === null) {
      return 0;
    }

    let maxLeft = maxDepth(curRoot.left);
    let maxRight = maxDepth(curRoot.right);

    max = Math.max(max, maxLeft + maxRight);

    return Math.max(maxLeft, maxRight) + 1;
  }

  maxDepth(root);

  return max;
}


// root = [1,2,3,4,5] => 3
// root = [1,2] => 1