/**
 * 538. Convert BST to Greater Tree
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
 * @return {TreeNode}
 */
var convertBST = function(root) {
    dfs(root, 0);
    return root;
};

var dfs = function (root, val) {
    if(root == null) return val;
    let right = dfs(root.right, val);
    let left = dfs(root.left, root.val + right);
    root.val = root.val + right;
    return left;
}
