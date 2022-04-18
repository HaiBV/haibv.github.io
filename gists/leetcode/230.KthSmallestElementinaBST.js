/**
 * 230. Kth Smallest Element in a BST
 * Binary Tree, DFS, BFS
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
 * @param {number} k
 * @return {number}
 */
let kthSmallest = function (root, k) {
  let stack = [];
  pushLeft(stack, root);
  while (--k > 0) {
    pushLeft(stack, stack.pop().right);
  }
  return stack.pop().val;
};

let pushLeft = function (stack, root) {
  while (root != null) {
    stack.push(root);
    root = root.left;
  }
};

let sortedArr = new Set();
let kthSmallestBST = function (root, k) {
  inorderTraverse(root);
  return Array.from(sortedArr).sort((a, b) => a - b)[k - 1];
};
let inorderTraverse = function (root) {
  if (root == null) return;
  inorderTraverse(root.left);
  sortedArr.add(root.val);
  inorderTraverse(root.right);
};
