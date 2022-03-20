/**
 * 1007. Minimum Domino Rotations For Equal Row
 * Array, Greedy
 */

/**
 * @param {number[]} tops
 * @param {number[]} bottoms
 * @return {number}
 */
var minDominoRotations = function (tops, bottoms) {
  const numberOfTops = new Array(7).fill(0);
  const numberOfBottoms = new Array(7).fill(0);
  const same = new Array(7).fill(0);

  for (let i = 0; i < tops.length; i++) {
    numberOfTops[tops[i]]++;
    numberOfBottoms[bottoms[i]]++;
    if (tops[i] === bottoms[i]) {
      same[tops[i]]++;
    }
  }
  
  for (let i = 1; i <= 6; i++) {
    if (numberOfTops[i] + numberOfBottoms[i] - same[i] === tops.length) {
      return Math.min(numberOfTops[i] - same[i], numberOfBottoms[i] - same[i]);
    }
  }
  return -1;
};
