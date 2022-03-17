/**
 * 143. Reorder List
 * Linked List, Two Pointers, Stack, Recursion
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head == null || head.next == null) return;

  // Find the middle of the list
  let p1 = head;
  let p2 = head;
  while (p2.next != null && p2.next.next != null) {
    p1 = p1.next;
    p2 = p2.next.next;
  }

  // Reverse the half after middle  1 -> 2 -> 3 -> 4 -> 5 -> 6 to 1 -> 2 -> 3 -> 6 -> 5 -> 4
  let preMiddle = p1;
  let preCurrent = p1.next;
  while (preCurrent.next != null) {
    let current = preCurrent.next;
    preCurrent.next = current.next;
    current.next = preMiddle.next;
    preMiddle.next = current;
  }

  // Start reorder one by one  1 -> 2 -> 3 -> 6 -> 5 -> 4 to 1 -> 6 -> 2 -> 5 -> 3 -> 4
  p1 = head;
  p2 = preMiddle.next;
  while (p1 != preMiddle) {
    preMiddle.next = p2.next;
    p2.next = p1.next;
    p1.next = p2;
    p1 = p2.next;
    p2 = preMiddle.next;
  }
};

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderListStack = function (head) {
  if (!head || !head.next || !head.next.next) return; // Edge cases

  let stack = [];
  let ptr = head;
  let size = 0;
  while (ptr != null) {
    // Put all nodes in stack
    stack.push(ptr);
    size++;
    ptr = ptr.next;
  }

  let pptr = head;
  // Between every two nodes insert the one in the top of the stack
  for (let j = 0; j < size / 2; j++) {
    element = stack.pop();
    element.next = pptr.next;
    pptr.next = element;
    pptr = pptr.next.next;
  }
  pptr.next = null;
};
