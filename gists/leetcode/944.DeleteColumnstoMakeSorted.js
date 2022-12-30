/**
 * 944. Delete Columns to Make Sorted
 * Array, String
 */

/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  const colCount = strs[0].length,
    rowCount = strs.length;
  let removeColCount = 0;

  for (let i = 0; i < colCount; i++) {
    for (let j = 1; j < rowCount; j++) {
      if (strs[j - 1].charCodeAt(i) > strs[j].charCodeAt(i)) {
				console.log(strs[j - 1], strs[j], i);
        removeColCount++;
        break;
      }
    }
  }

  return removeColCount;
};

const strs = ["rrjk", "furt", "guzm"];

console.log(minDeletionSize(strs));
