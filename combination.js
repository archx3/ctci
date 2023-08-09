/*
* Given an array of integers, return all the possible combinations of the array elements.
* For example, for the array [1, 2, 3, 4], the possible combinations are:
* [1], [2], [3], [4],
* [1,2], [1,2], [1,3], [1,4], [2,3], [2,4], [3,4],
* [1,2,3], [1,2,4], [1,3,4], [2,3,4],
* [1,2,3,4]
*
* We need to create an array that contains all the possible combinations of the array elements.
* The we push all the possible combinations into the array.
* The indi
*
*/

function getAllCombinations (array) {
  const SIZE = array.length;
  const MAX_COMBINATION = SIZE - 1;

  let left = 0;
  let right = 0;

  let combinations = [];
  let combinationLength = 1;
  let temp = []; // current combination

  let i = 0;

  while (combinationLength <= MAX_COMBINATION) {
    console.log({l : left, r : i,  cl :combinationLength, i/* t :temp.length, cs : combinations, temp*/ })

    if (temp.length < combinationLength) {
      temp.push(array[i]);
      i += 1;
    } else {
      combinations.push(temp);
      temp = [];

      if (i < MAX_COMBINATION) {
        temp.push(array[i]);
        i += 1;
      } else {
        left += 1;
        i = left - 1;
      }
    }

    if (left >= SIZE) {
      combinationLength += 1;
      left = 0;
      i = left;
    }

  }

  return combinations;
}


// driver code
console.log(getAllCombinations([0, 1, 2, 3]))
// console.log(getAllCombinations([1, 2, 3, 4]))
// getAllCombinations([1, 2, 3, 4])
