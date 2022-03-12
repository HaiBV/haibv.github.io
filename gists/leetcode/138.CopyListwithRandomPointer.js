/**
 * 138. Copy List with Random Pointer
 * Hash Table, Linked List
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomListHashTable = function (head) {
  if (!head) {
    return null;
  }
  const clones = new Map();
  let n = head;
  while (n) {
    clones.set(n, new Node(n.val));
    n = n.next;
  }
  n = head;
  while (n) {
    clones.get(n).next = clones.get(n.next) || null;
    clones.get(n).random = clones.get(n.random) || null;
    n = n.next;
  }
  return clones.get(head);
};

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let iter = head,
    next;

  // First round: make copy of each node,
  // and link them together side-by-side in a single list.
  while (iter) {
    next = iter.next;

    let copy = new Node(iter.val);
    iter.next = copy;
    copy.next = next;

    iter = next;
  }

  // Second round: assign random pointers for the copy nodes.
  iter = head;
  while (iter != null) {
    if (iter.random != null) {
      iter.next.random = iter.random.next;
    }
    iter = iter.next.next;
  }

  // Third round: restore the original list, and extract the copy list.
  iter = head;
  let pseudoHead = new Node(0);
  let copy,
    copyIter = pseudoHead;

  while (iter != null) {
    next = iter.next.next;

    // extract the copy
    copy = iter.next;
    copyIter.next = copy;
    copyIter = copy;

    // restore the original list
    iter.next = next;

    iter = next;
  }

  return pseudoHead.next;
};
