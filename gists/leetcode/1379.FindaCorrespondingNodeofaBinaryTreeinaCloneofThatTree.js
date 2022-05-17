/**
 * 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree
 * Binary Tree, DFS, BFS
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopyDFS = function (original, cloned, target) {
  function traverse(oNode, cNode) {
    if (!oNode) return;
    if (oNode === target) return cNode;
    return traverse(oNode.left, cNode.left) || traverse(oNode.right, cNode.right);
  }
  return traverse(original, cloned);
};

/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */
var getTargetCopyBFS = function (original, cloned, target) {
  let queue = [[original, cloned]];

  while (queue.length) {
    const next = [];

    for (let [oNode, cNode] of queue) {
      if (oNode === target) return cNode;
      if (oNode.left) next.push([oNode.left, cNode.left]);
      if (oNode.right) next.push([oNode.right, cNode.right]);
    }
    queue = next;
  }
};
