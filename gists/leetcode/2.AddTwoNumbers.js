/**
 * 2. Add Two Numbers
 * Linked List, Math, Recursion
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let headSum = new ListNode(0);
  let prevSum = headSum;
  let sum = 0;
  let cur1 = l1;
  let cur2 = l2;
  while (cur1 != null || cur2 != null) {
    sum = sum >= 10 ? 1 : 0;
    if (cur1) {
      sum += cur1.val;
      cur1 = cur1.next;
    }
    if (cur2) {
      sum += cur2.val;
      cur2 = cur2.next;
    }

    prevSum.next = new ListNode(sum >= 10 ? sum - 10 : sum);
    prevSum = prevSum.next;
  }

  if (sum >= 10) {
    prevSum.next = new ListNode(1, null);
  }

  return headSum.next;
};

addTwoNumbers([2, 4, 3], [5, 6, 4]); // [7,0,8]

addTwoNumbers([0], [0]); // [0]

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]); // [8,9,9,9,0,0,0,1]
