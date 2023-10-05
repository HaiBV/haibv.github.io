import { expect, test } from "vitest";
import { majorityElement } from "../../leetcode/229.MajorityElement2";

test("example 1", () => {
  expect(majorityElement([1])).toStrictEqual([1]);
});

test("example 2", () => {
  expect(majorityElement([1, 2])).toStrictEqual([1, 2]);
});

test("example 3", () => {
  expect(majorityElement([3, 2, 3])).toStrictEqual([3]);
});

test("example 4", () => {
  expect(majorityElement([2, 2])).toStrictEqual([2]);
});
