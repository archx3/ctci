/*
* Write code that enhances all arrays such that you can call the snail(rowsCount, colsCount) method that transforms the 1D array into a 2D array organised in the pattern known as snail traversal order. Invalid input values should output an empty array. If rowsCount * colsCount !== nums.length, the input is considered invalid.


Snail traversal order starts at the top left cell with the first value of the current array. It then moves through the entire first column from top to bottom, followed by moving to the next column on the right and traversing it from bottom to top. This pattern continues, alternating the direction of traversal with each column, until the entire current array is covered.  For example, when given the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] with rowsCount = 5 and colsCount = 4, the desired output matrix is shown below. Note that iterating the matrix following the arrows corresponds to the order of numbers in the original array.

E.g 1:
  Input:
  nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]
  rowsCount = 5
  colsCount = 4
  Output:
  [
   [19,17,16,15],
   [10,1,14,4],
   [3,2,12,20],
   [7,5,18,11],
   [9,8,6,13]
  ]

E.g 2:
 Input:
 nums = [1,2,3,4]
 rowsCount = 1
 colsCount = 4
 Output: [[1, 2, 3, 4]]

E.g 3:
  Input:
  nums = [1,3]
  rowsCount = 2
  colsCount = 2
  Output: []
  Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.
*  */

function changeDirection (direction) {

}

function snail (nums, rowsCount, colsCount) {
  const SIZE = nums.length;
  if (SIZE === 0 || rowsCount * colsCount !== SIZE) {
    return [];
  }

  const twoDimensionalArray = [];

  for (let i = 0; i < rowsCount; i++) {
    twoDimensionalArray.push([]);
  }

  let i = 0;
  let direction = 'down';

  while (i < SIZE) {
    const COL = i % rowsCount;
    // const SHIFT = i !== 0 && COL === 0;

    direction = i !== 0 && COL === 0 ? (direction === 'down' ? 'up' : 'down') : direction;
    // let col = direction === 'up' ? (rowsCount - 1) - COL : COL;
    // console.log({ i, num : nums[i],COL,  col, SHIFT, direction })

    twoDimensionalArray[direction === 'up' ? (rowsCount - 1) - COL : COL].push(nums[i]);
    i++;
  }

  return twoDimensionalArray;
}

Array.prototype.snail = function (rowsCount, colsCount) {
  const SIZE = this.length;
  if (SIZE === 0 || rowsCount * colsCount !== SIZE) {
    return [];
  }

  const twoDimensionalArray = [];

  for (let i = 0; i < rowsCount; i++) {
    twoDimensionalArray.push([]);
  }

  let i = 0;
  let direction = 'down';

  while (i < SIZE) {
    const INDEX = i % rowsCount;

    if (i !== 0 && INDEX === 0) {direction = direction === 'down' ? 'up' : 'down'}
    twoDimensionalArray[direction === 'up' ? (rowsCount - 1) - INDEX : INDEX].push(this[i]);
    i++;
  }

  return twoDimensionalArray;
}


console.log(snail([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15], 5, 4))
console.log(snail([1, 2, 3, 4], 1, 4))  // [[1, 2, 3, 4]]
console.log(snail([1, 3], 2, 2))  // null
//
// console.log([1, 2, 3, 4].snail(1, 4))  // [[1, 2, 3, 4]]
// console.log([19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5, 4)) // [[19,17,16,15],[10,1,14,4],[3,2,12,20],[7,5,18,11],[9,8,6,13]]

