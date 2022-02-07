/**
 * 160. Intersection of Two Linked Lists
 * Hash Table, Linked List, Two Pointers
 */

import ListNode from '../dataStructures/ListNode';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let a = headA,
    b = headB;
  while (a !== b) {
    a = !a ? headB : a.next;
    b = !b ? headA : b.next;
  }
  return a;
}
