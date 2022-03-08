/**
 * 141. Linked List Cycle
 * Hash Table, Linked List, Two Pointers
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  let cur = head;
  
  while (cur) {
      if (cur.seen === true) {
          return true;
      }
      
      cur.seen = true;
      cur = cur.next;
  }
  
  return false;
};