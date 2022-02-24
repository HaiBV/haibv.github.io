/**
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 * Array, Hash Table, Divide and Conquer, Binary Tree
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  p = i = 0;
  build = function (stop) {
    if (inorder[i] != stop) {
      var root = new TreeNode(preorder[p++]);
      root.left = build(root.val);
      i++;
      root.right = build(stop);
      return root;
    }
    return null;
  };
  return build();
};
