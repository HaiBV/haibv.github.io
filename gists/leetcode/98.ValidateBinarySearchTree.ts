/**
 * 98. Validate Binary Search Tree
 * Binary Tree, DFS, BFS
 */

import TreeNode from '../dataStructures/TreeNode';

function checkValidBST(root: TreeNode | null, min: number, max: number): boolean {
  if (!root) {
    return true;
  }

  if (root.val >= max || root.val <= min) {
    return false;
  }

  return checkValidBST(root.left, min, root.val) && checkValidBST(root.right, root.val, max);
}

function isValidBST(root: TreeNode | null): boolean {
  return checkValidBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

// root = [2,1,3]
// root = [5,1,4,null,null,3,6]
