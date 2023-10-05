export const majorityElement = (nums: Array<number>): Array<number> => {
  if (nums.length < 3) {
    return [...new Set<number>(nums)];
  }

  let results: Array<number> = [];
  const hash: { [key: number]: number } = {};

  for (const num of nums) {
    if (!hash[num]) {
      hash[num] = 1;
    } else {
      if (++hash[num] > nums.length / 3) {
        results.push(num);
      }
    }
  }

  return [...new Set<number>(results)];
};
