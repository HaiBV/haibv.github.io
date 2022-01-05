// 21. Merge Two Sorted Lists
// Linked list
// Recursion

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  if (!list1) {
      return list2;
  }
  
  if (!list2) {
      return list1;
  }
  
  let list = new ListNode();
  
  if (list1.val < list2.val) {
      list.val = list1.val;
      list.next = mergeTwoLists(list1.next, list2);
  } else {
      list.val = list2.val;
      list.next = mergeTwoLists(list1, list2.next);
  }
  
  return list;
};