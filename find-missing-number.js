/**
 * Given an unsorted array arr[] of size N-1 with integers in the range of [1, N], the task is to find the missing number from the first N integers.
 * Note: There are no duplicates in the list.
 *
 * e.g. :
 *
 *  Input: arr[] = {1, 2, 4, 6, 3, 7, 8}, N = 8
 *  Output: 5
 *  Explanation: The missing number between 1 to 8 is 5
 *  Input: arr[] = {1, 2, 3, 5}, N = 5
 *  Output: 4
 *  Explanation: The missing number between 1 to 5 is 4
 *
 *  NB: You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.
 */


/**
 *
 * @param nums {Array<Number>}
 */
function missingNumber (nums) {
  const SIZE = nums.length;

  // const map = new Map(nums.map((item, index) => [item, index]));
  const map = new Set();

  for  (let i = 0; i < SIZE ; i++) {
    map.add(nums[i]);
  }

  let i = 0;
  while (i < SIZE) {
    if (!map.has(i)) {
      return i
    }
    i++;
  }

  return SIZE;
}

// // console.log(missingNumber([1, 2, 4, 6, 3, 7, 8]));
// console.log(missingNumber([1, 2, 3, 5]));
// console.log(missingNumber([3, 0, 1]));
// console.log(missingNumber([0, 1]));
// console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));


/**
 * This one will O(n^2) time and O(1) space
 * @param nums
 * @returns {*|number}
 */
function missingNumberN2 (nums) {
  const SIZE = nums.length;

  let i = 0;
  while (i < SIZE) {
    if (nums.indexOf(i) === -1) {
      return i
    }
    i++;
  }

  return SIZE;
}


/**
 * in the approach below, we are using the fact that the sum of the first n numbers is:
 *  n(n+1)/2, the formula for the sum of the first n natural numbers.
 *  We then find the sum of all the numbers in the array and subtract it from the sum of the first n numbers.
 *  This will give the value of the missing element.
 * This one will O(n) time and O(1) space
 * @param nums
 */
function missingNumber1 (nums) {
  const SIZE = nums.length;

  // formula for the sum of the first n natural numbers is SIZE* (SIZE+1)/2
  let total = ((SIZE + 1) * (SIZE + 2)) / 2; // we need to add 1 to SIZE because the array is missing one element

  //we don't have to use reduce here, we can just use a for loop and subtract each element from total, the remainder will be the missing element
  // console.log({total})
/*  for (let i = 0; i < SIZE; i++) {
    console.log({total, i, [`tn-${nums[i]}`] : total - nums[i]})
    total -= nums[i];
  }*/

  let sum = nums.reduce((acc, curr) => acc + curr, );

  return total - sum;
}

// console.log(missingNumber1([1, 2, 4, 6, 3, 7, 8]));
// console.log(missingNumber1([1, 2, 3, 5]));
// console.log(missingNumber1([3, 0, 1]));
console.log(missingNumber1([0, 1]));
