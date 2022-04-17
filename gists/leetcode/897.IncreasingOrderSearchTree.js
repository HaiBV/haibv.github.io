/**
 * 897. Increasing Order Search Tree
 * Binary Tree, DFS, BFS, Stack
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  return increasing(root, null);
};

var increasing = function (root, tail) {
  if (root == null) return tail;
  let res = increasing(root.left, root);
  root.left = null;
  root.right = increasing(root.right, tail);
  return res;
};
