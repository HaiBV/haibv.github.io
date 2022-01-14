/**
 * 101. Symmetric Tree
 * Binary Tree, DFS, BFS
 */
import TreeNode from '../dataStructures/TreeNode';

function checkSymmetric(left: TreeNode | null, right: TreeNode | null): boolean {
  if (!left && !right) {
    return true;
  }

  if (!left || !right) {
    return false;
  }

  if (left.val !== right.val) {
    return false;
  }

  return checkSymmetric(left.left, right.right) && checkSymmetric(left.right, right.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return true;
  }

  return checkSymmetric(root.left, root.right);
}

// root = [1,2,2,3,4,4,3]
// root = [1,2,2,null,3,null,3]
