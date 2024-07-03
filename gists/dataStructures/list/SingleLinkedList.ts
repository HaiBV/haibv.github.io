import { ListNode, LinkedList } from "./ListNode";

export class SingleLinkedList<T> implements LinkedList<T> {
  private counter: number;

  constructor(private head?: ListNode<T>) {
    this.counter = 0;
  }
  isEmpty(): boolean {
    return this.counter === 0;
  }
  get(index: number): T | null | undefined {
    let currentNode = this.head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode?.next;
    }

    return currentNode?.data;
  }
  push(data: T): void {
    const newNode: ListNode<T> = new ListNode<T>(data);

    if (!this.isEmpty()) {
      newNode.next = this.head;
    }
    this.head = newNode;

    this.counter++;
  }
  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const popNode: ListNode<T> = this.head!;
    this.head = this.head!.next;
    this.counter--;

    return popNode.data;
  }
  append(data: T): void {
    const newNode: ListNode<T> = new ListNode<T>(data);
    if (this.isEmpty()) {
      this.head = newNode;
    }
    this.counter++;
  }
  // removeTail(): T | undefined {}
  // insertAt(index: number, data: T): void {}
  // removeAt(index: number): T | undefined {}
  // clear(): void {}
  // toArray(): (T | undefined)[] {}
  get length(): number {
    return this.counter;
  }
}
