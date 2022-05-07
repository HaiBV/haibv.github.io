/**
 * 456. 132 Pattern
 * Array, Binary Search, Stack, Ordered Set
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let n = nums.length, top = n, third = Number.MIN_SAFE_INTEGER;

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < third) return true;
        while (top < n && nums[i] > nums[top]) third = nums[top++];
        nums[--top] = nums[i];
    }
    
    return false;
}
