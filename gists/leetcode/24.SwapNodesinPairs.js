/**
 * 24. Swap Nodes in Pairs
 * Linked List, Recursion
 */

function swapPairs(head) {
  if (!head || !head.next) return head;
  var v1 = head,
    v2 = head.next,
    v3 = v2.next;
  v2.next = v1;
  v1.next = swapPairs(v3);
  return v2;
}
