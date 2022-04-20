/**
 * 173. Binary Search Tree Iterator
 * Binary Tree, Stack, Iterator, Design
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class BSTIterator {
  constructor(root) {
    this.root = root;
    this.stack = [];
  }

  next() {
    while (this.root) {
      this.stack.push(this.root);
      this.root = this.root.left;
    }
    const res = this.stack.pop();
    this.root = res.right;
    return res.val;
  }

  hasNext() {
    return this.root || this.stack.length;
  }
}
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
