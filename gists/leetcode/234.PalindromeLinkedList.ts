/**
 * 234. Palindrome Linked List
 * Linked list, Two Points, Stack, Recursion
 */

/**
 * Definition for singly-linked list.
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// Solution with O(n) time and O(n/2) space
function isPalindrome(head: ListNode | null): boolean {
  let stack: number[] = [];

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    stack.push(slow.val);

    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  while (slow) {
    if (slow.val === stack.pop()) {
      slow = slow.next;
    } else {
      return false;
    }
  }

  return true;
}
