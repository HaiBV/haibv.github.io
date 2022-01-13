/**
 * 104. Maximum Depth of Binary Tree
 * Binary Tree, DFS, BFS
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// Recursion, DFS
function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(1 + maxDepth(root.left), 1 + maxDepth(root.right));
}

// BFS
function BFSmaxDepth(root: TreeNode | null): number {
  if (!root) {
      return 0;
  }
  
  let levels: number = 0;
  let queue: (TreeNode | null)[] = [];
  queue.push(root);
  
  while (queue.length > 0) {
      for (let i = 0; i < queue.length; i++) {
          let node = queue.shift();
          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }
      }
      levels++;
  }
  
  return levels;
};

// [3,9,20,null,null,15,7]
// [1,null,2]