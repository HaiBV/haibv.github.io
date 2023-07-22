/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    const lis = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
      lis[i] = 1;
      for (let j = 0; j < i; j++) {
        if (nums[j] < nums[i]) {
          lis[i] = Math.max(lis[i], lis[j] + 1);
        }
      }
    }

    return Math.max(...lis);
};

const nums1 = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums1));
// 4


const nums2 = [0,1,0,3,2,3];
console.log(lengthOfLIS(nums2));
// 4

const nums3 = [7,7,7,7,7,7,7];
console.log(lengthOfLIS(nums3));
// 1

const nums4 = [1,3,5,4,7];
console.log(lengthOfLIS(nums4));
// 4
