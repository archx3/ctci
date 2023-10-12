/**
 * Given an unsorted integer array nums, return the smallest missing positive integer.
 *
 * You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 *
 * What the question really asks is to return the smallest positive integer that is not in the array
 *
 * Example 1:
 *
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 *
 * Example 2:
 *
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Explanation: 1 is in the array but 2 is missing.
 *
 * Constraints:
 *
 *     1 <= nums.length <= 10^5
 *     -231 <= nums[i] <= (2^31) - 1
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositiveN = function (nums) {
  const SIZE = nums.length;
  const map = new Set();

  for (let i = 0; i < SIZE; i++) {
    map.set(nums[i]);
  }

  let i = 1;
  while (i <= SIZE) {
    if (!map.has(i)) {
      return i
    }
    i++;
  }

  return SIZE + 1;
};
