/**
 * 95. Unique Binary Search Trees II
 * Dynamic Programming, Backtracking, Binary Tree
 */
import TreeNode from '../dataStructures/TreeNode';

function generateTrees(n: number, l: number = 1, r: number = n, res: Array<TreeNode | null> = []): Array<TreeNode | null> {
  for (let i = l; i <= r; i++) {
    for (const left of generateTrees(n, l, i - 1)) {
      for (const right of generateTrees(n, i + 1, r)) {
        res.push(new TreeNode(i, left, right));
      }
    }
  }
  return n ? (res.length ? res : [null]) : [];
}
