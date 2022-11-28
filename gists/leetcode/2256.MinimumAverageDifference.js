/**
 * 2256. Minimum Average Difference
 * Array, Prefix Sum
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumAverageDifference = (nums) => {
  const n = nums.length;
  let sumAfter = nums.reduce((acc, num) => acc + num, 0);
  let sumBefore = 0;
  let minimum = Infinity;
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    sumBefore += nums[i];
    sumAfter -= nums[i];

    let avgBefore = Math.floor(sumBefore / (i + 1));
    let avgAfter = sumAfter !== 0 ? Math.floor(sumAfter / (n - 1 - i)) : 0;
    let avg = Math.abs(avgBefore - avgAfter);
    if (avg < minimum) {
      minimum = avg;
      ans = i;
    }
  }

  return ans;
};

// minimumAverageDifference([0]);
console.log(minimumAverageDifference([2, 5, 3, 9, 5, 3]));
