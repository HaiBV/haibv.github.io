/**
 * 763. Partition Labels
 * Hash Table, String, Two Pointers, Greedy
 */

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let hashLastIndex = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    hashLastIndex[s.charCodeAt(i) - 97] = i;
  }

  let list = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, hashLastIndex[s.charCodeAt(i) - 97]);
    if (end === i) {
      list.push(end - start + 1);
      start = end + 1;
    }
  }

  return list;
};

partitionLabels('ababcbacadefegdehijhklij'); // [9, 7, 8];

partitionLabels('eccbbbbdec'); // [10]
