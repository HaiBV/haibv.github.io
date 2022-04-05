/**
 * 148. Sort List
 * Linked List, Two Pointers, Divide and Conquer, Sorting, Merge Sort
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
var sortList = function (head) {
  //If List Contain a Single or 0 Node
  if (head == null || head.next == null) return head;

  let temp = null;
  let slow = head;
  let fast = head;

  // 2 pointer appraoach / turtle-hare Algorithm (Finding the middle element)
  while (fast != null && fast.next != null) {
    temp = slow;
    slow = slow.next; //slow increment by 1
    fast = fast.next.next; //fast incremented by 2
  }
  temp.next = null; //end of first left half

  let l1 = sortList(head); //left half recursive call
  let l2 = sortList(slow); //right half recursive call

  return mergelist(l1, l2); //mergelist Function call
};

//MergeSort Function O(n*logn)
var mergelist = function (l1, l2) {
  let ptr = new ListNode(0);
  let curr = ptr;

  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }

    curr = curr.next;
  }

  //for unqual length linked list
  if (l1 != null) {
    curr.next = l1;
    l1 = l1.next;
  }

  if (l2 != null) {
    curr.next = l2;
    l2 = l2.next;
  }

  return ptr.next;
};
