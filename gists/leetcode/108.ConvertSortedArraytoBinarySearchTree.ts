/**
 * 108. Convert Sorted Array to Binary Search Tree
 * Binary Tree, Devide and Conquer
 */

import TreeNode from '../dataStructures/TreeNode';

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) {
    return null;
  }

  let mid = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[mid]);

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
}

// nums = [-10,-3,0,5,9]
// nums = [1,3]
