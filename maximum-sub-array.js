/**
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 *
 * Example 1:
 *
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 *
 * Example 2:
 *
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 *
 * Example 3:
 *
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 *
 * Constraints:
 *
 *   1 <= nums.length <= 10^5
 *   -104 <= nums[i] <= 10^4
 */

const sum = require("./sum")
const { maxSubArrayData } = require("./data");

function maxSubArray(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  const SIZE = nums.length;

  if (nums.length === 1) {
    return nums[0];
  }


  const MAX_INDEX = SIZE - 1;

  let left = 0;
  let right = 0;

  let subArrays = [];

  const MAX_SUB_ARRAY = {
    value : 0,
    array : []
  } //  we can replace this with a tuple

  while (right < SIZE) {
    let slice = nums.slice(left, right + 1)
    let sumOfSlice = sum(slice);

    // console.log({slice, sumOfSlice})

    if (sumOfSlice > MAX_SUB_ARRAY.value) {
      MAX_SUB_ARRAY.value = sumOfSlice;
      MAX_SUB_ARRAY.array = slice;
    }

    if (right === MAX_INDEX && left !== right) {
      right = ++left
    } else {
      right++;
    }
  }

  return MAX_SUB_ARRAY;
}

console.log(maxSubArray([1,2,3, 4]))
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


// console.log(maxSubArray(maxSubArrayData))


// let's solve this with Kadane's algorithm
// https://www.youtube.com/watch?v=86CQq3pKSUw

function maxSubArrayWithKadanesAlgorithm(nums) {
  if (!nums || !nums.length) {
    return 0;
  }

  const SIZE = nums.length;

  if (nums.length === 1) {
    return nums[0];
  }

  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < SIZE; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArrayWithKadanesAlgorithm(maxSubArrayData))
