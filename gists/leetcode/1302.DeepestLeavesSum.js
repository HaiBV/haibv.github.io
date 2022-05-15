/**
 * 1302. Deepest Leaves Sum
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
 * @return {number}
 */
var deepestLeavesSum = function (root) {
  let list = [root];
  while (list.length) {
    let len = list.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
      let each = list.shift();
      res += each.val;
      if (each.left) list.push(each.left);
      if (each.right) list.push(each.right);
    }
    if (!list.length) return res;
  }
};
