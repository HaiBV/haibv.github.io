/**
 * 82. Remove Duplicates from Sorted List II
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  let cur = head;

  while (cur) {
    while (cur.next && cur.val === cur.next.val) {
      cur = cur.next;
    }

    if (prev.next === cur) {
      prev = prev.next;
    } else {
      prev.next = cur.next;
    }

    cur = cur.next;
  }

  return dummy.next;
};

deleteDuplicates([1, 2, 3, 3, 4, 4, 5]); // [1,2,5]

deleteDuplicates([1, 1, 1, 2, 3]); // [2,3]
