export class ListNode<T> {
  constructor(public data: T, public next?: ListNode<T>) {}
}

export class DoublyLinkedListNode<T> {
  constructor(public value: T, public next?: DoublyLinkedListNode<T>, public prev?: DoublyLinkedListNode<T>) {}
}

export interface LinkedList<T> {
  isEmpty(): boolean;
  get(index: number): T | null | undefined;
  push(data: T): void;
  pop(): T | undefined;
  append(data: T): void;
  // removeTail(): T | undefined;
  // insertAt(index: number, data: T): void;
  // removeAt(index: number): T | undefined;
  // clear(): void;
  // toArray(): (T | undefined)[];
  get length(): number;
}
