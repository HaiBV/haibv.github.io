/**
 * 1721. Swapping Nodes in a Linked List
 * Linked List, Two Pointers
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  var n1 = null,
    n2 = null;

  for (var p = head; p != null; p = p.next) {
    n2 = n2 === null ? null : n2.next;
    if (--k == 0) {
      n1 = p;
      n2 = head;
    }
  }

  var tmp = n1.val;
  n1.val = n2.val;
  n2.val = tmp;
  return head;
};
