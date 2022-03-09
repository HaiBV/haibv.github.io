/**
 * 142. Linked List Cycle II
 * Hash Table, Linked List, Two Pointers
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let slow = head,
    fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) break;
  }
  if (fast == null || fast.next == null) return null;
  while (head != slow) {
    head = head.next;
    slow = slow.next;
  }
  return head;
};
