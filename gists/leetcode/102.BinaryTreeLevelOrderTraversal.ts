/**
 * 102. Binary Tree Level Order Traversal
 * Binary Tree, BFS
 */

import TreeNode from '../dataStructures/TreeNode';

function levelOrder(root: TreeNode | null): number[][] {
  let ans: number[][] = [];
  let queue: TreeNode[] = [root];

  while (queue[0]) {
    let l = queue.length;
    let arr = [];
    for (let i = 0; i < l; i++) {
      let cur = queue.shift();
      arr.push(cur.val);
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    ans.push(arr);
  }

  return ans;
}

// root = [3,9,20,null,null,15,7]
// root = [1]
// root = []
