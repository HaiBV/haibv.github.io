import { expect, test } from "vitest";
import { SingleLinkedList } from "../../../dataStructures/list/SingleLinkedList";

test("can init", () => {
  const linkedList = new SingleLinkedList<number>();
  expect(linkedList.isEmpty()).toStrictEqual(true);
});

test("push 1 node", () => {
  const linkedList = new SingleLinkedList<number>();
  linkedList.push(1);
  expect(linkedList.isEmpty()).toStrictEqual(false);
  expect(linkedList.length).toEqual(1);
  expect(linkedList.get(0)).toEqual(1);
});

test("push 3 node", () => {
  const linkedList = new SingleLinkedList<number>();
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  expect(linkedList.isEmpty()).toStrictEqual(false);
  expect(linkedList.length).toEqual(3);
  expect(linkedList.get(0)).toEqual(3);
  expect(linkedList.get(2)).toEqual(1);
});

test("pop node", () => {
  const linkedList = new SingleLinkedList<number>();
  expect(linkedList.pop()).toEqual(undefined);
  linkedList.push(1);
  linkedList.push(2);
  linkedList.push(3);
  expect(linkedList.isEmpty()).toStrictEqual(false);
  expect(linkedList.pop()).toEqual(3);
  expect(linkedList.pop()).toEqual(2);
});

test("append node", () => {
  const linkedList = new SingleLinkedList<number>();
  linkedList.append(1);
  expect(linkedList.isEmpty()).toStrictEqual(false);
  expect(linkedList.get(0)).toEqual(1);
  linkedList.append(2);
  expect(linkedList.get(0)).toEqual(1);
  expect(linkedList.get(1)).toEqual(2);
  // linkedList.push(3);
  // expect(linkedList.isEmpty()).toStrictEqual(false);
  // expect(linkedList.pop()).toEqual(3);
  // expect(linkedList.pop()).toEqual(2);
});
