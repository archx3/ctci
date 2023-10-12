/*
* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

This is an NP-complete problem. The brute force solution is to iterate over the array and for each element, iterate over the rest of the array and check if the sum of the two elements is equal to the target. This solution has a time complexity of O(n^2).

Another solution is to sort the array and use two pointers to find the two elements. This solution has a time complexity of O(n log n).

We can also solve this problem using a hash table. We will iterate over the array and for each element, we will check if the difference between the target and the element exists in the hash table. If it does, we will return the indices of the two elements. If it doesn't, we will add the element to the hash table. This solution has a time complexity of O(n) and a space complexity of O(n).



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


/**
 * Returns an array containing the indices of two numbers in the given array that add up to the given target.
 * If no such pair exists, returns an empty array.
 *
 * @description
 * This approach uses two pointers to find the two numbers with a time complexity of O(n log n).
 *
 * @param {number[]} nums - An array of numbers.
 * @param {number} target - The target sum.
 * @returns {number[]} - An array containing the indices of two numbers that add up to the target sum.
 *                      If no such pair exists, returns an empty array.
 */
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
// console.log(twoSum([3,3], 6));
// console.log(twoSum([3,2,3], 6));
// let's say we have an array of 10,000,000 elements
const arr = Array.from({length: 10_000}, () => Math.floor(Math.random() * 40));

// console.log(twoSum(arr, 6));


function twoSumN(nums, target) {
  // const map = new Map(nums.map((item, index) => [item, index]));
  const map = new Map();

  const SIZE = nums.length;

  for (let i = 0; i < SIZE; i++) {
    const DIFFERENCE = target - nums[i];
    if (map.has(DIFFERENCE)) {
      return [map.get(DIFFERENCE), i];
    } else {
      map.set(nums[i], i);
    }
  }

  return null;
}

console.log(twoSumN([2,7,11,15], 9))
console.log(twoSumN([3,2,4], 6));

