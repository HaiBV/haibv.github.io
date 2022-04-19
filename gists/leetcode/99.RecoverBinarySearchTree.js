/**
 * 99. Recover Binary Search Tree
 * Binary Tree, DFS
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
  let prev = null,
    big = null,
    small = null;
  let dfs = function (root) {
    if (!root) return;
    dfs(root.left);
    if (prev != null && prev.val > root.val) {
      small = root; // potential smaller number that needs to be swapped
      if (!big) big = prev; // assured bigger number that needs to be swapped
      else return;
    }
    prev = root;
    dfs(root.right);
  };

  dfs(root);
  [big.val, small.val] = [small.val, big.val];
};
