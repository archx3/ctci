/*
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.



Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

* */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSumO(nums, target) {

  const SIZE = nums.length;
  for (let i = 0; i < SIZE; i++ ) {

    for (let j = i + 1; j < SIZE; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}

function twoSum(nums, target) {
  const SIZE = nums.length;

  let left = 0;
  let right = 1;

  while (left < SIZE) {
    if (nums[left] + nums[right] === target) {
      return [left, right]
    }
    if (right === SIZE - 1) {
      left++;
      right = left + 1;
    } else {
      right ++;
    }

  }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([3,2,3], 6));
// let's say we have an array of 10,000,000 elements
const arr = Array.from({length: 10_000}, () => Math.floor(Math.random() * 40));

console.log(twoSum(arr, 6));
