/**
 * 704. Binary Search
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
	let start = 0;
	let end = nums.length - 1;
	let i;
	do {
			i = Math.round((start + end) / 2);
			if (nums[i] === target) {
					return i;
			}
			if (nums[i] < target) {
					start = i;
			} else {
					end = i;
			}
	} while (start < end);

	return -1;
};

// console.log(search([-1,0,3,5,9,12], 9));
// console.log(search([-1,0,3,5,9,12], 2));
