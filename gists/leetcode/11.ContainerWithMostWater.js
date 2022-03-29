/**
 * 11. Container With Most Water
 * Array, Two Pointers, Greedy
 */

//  The widest container (using first and last line) is a good candidate, because of its width. Its water level is the height of the smaller one of first and last line.
//  All other containers are less wide and thus would need a higher water level in order to hold more water.
//  The smaller one of first and last line doesn't support a higher water level and can thus be safely removed from further consideration.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let [i, j] = [0, height.length - 1];
  let water = 0;
  while (i < j) {
    water = Math.max(water, (j - i) * Math.min(height[i], height[j]));
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return water;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]); // 49

maxArea([1, 1]); // 1
