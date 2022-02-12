/**
 * 347. Top K Frequent Elements
 *
 * Array, Hash Table, Divide and Conquer, Sorting, Heap (Priority Queue), Bucket Sort, Counting, Quickselect
 */

function topKFrequent(nums: number[], k: number): number[] {
  let freqMap = new Map();
  let res = [];

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }

  let sortedArray = [...freqMap.entries()].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    res.push(sortedArray[i][0]);
  }

  return res;
}

// nums = [1,1,1,2,2,3], k = 2 => [1, 2]
// nums = [1], k = 1 => [1]
