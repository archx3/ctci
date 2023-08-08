/**
 * Given an array of integers, print all sub-arrays within the array.
 * A subarray is a contiguous part of array, i.e., Subarray is an array that is inside another array.
 * More like, all possible combinations of the array elements.
 * In general, for an array of size n, there are n*(n+1)/2 non-empty subarrays.
 * For a given array of size N, it is stated that we can have (2n-1) non-empty sub-sequences in total. But it is (2^n) - 1
 *  ...we'll see
 *
 * For example, Consider the array [1, 2, 3, 4],
 * There are 10 non-empty sub-arrays. The subarrays are:
 * (1), (2), (3), (4),
 * (1,2), (2,3), (3,4),
 * (1,2,3), (2,3,4), and
 * (1,2,3,4)
 */

/*
*
* In the code below,
start and end are declared as the two pointers.
If end reaches the end of array and start is not yet at the end, we increment start and reset end to start.
For each set of start and end, a subarray is pushed into the result array.
This loop continues until end reaches the end of the array and there are no more starting points to consider for subarrays.
Thus, the while-loop scans the entire space of subarrays in just one pass, as required.
* */
function getAllSubArrays (array) {
  const SIZE = array.length;
  const MAX_INDEX = SIZE - 1;

  let left = 0;
  let right = 0;

  let subArrays = [];

  while (right < SIZE) {
    subArrays.push(array.slice(left, right + 1));

    if (right === MAX_INDEX && left !== right) {
      right = ++left
    } else {
      right++;
    }
  }

  return subArrays;
}

function findSubArrays(inputArray) {
  const result = [];
  let start = 0;
  let end = 0;

  while (start < inputArray.length) {
    end = start;

    while (end < inputArray.length) {
      result.push(inputArray.slice(start, end + 1));
      end++;
    }

    start++;
  }

  return result;
}




// console.log(findSubArrays([0, 1, 2, 3]));

console.log(getAllSubArrays([0, 1, 2, 3,]))
// console.log(printAllSubArrays([1, 2, 3, 4,]))
