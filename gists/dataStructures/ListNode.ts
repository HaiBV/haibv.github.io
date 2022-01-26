export default class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export class LinkedList {
  head: ListNode | null;

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let counter = 1;
    let node = this.head;

    while (node.next) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  push(val: number): void {
    const node = new ListNode(val);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  unshift(val: number): void {
    const node = new ListNode(val);

    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let cur: ListNode | null = this.head;
    let res = [];
    while (cur) {
      res.push(cur.val);
      cur = cur.next;
    }

    console.log(res.join(' -> '));
  }
}
