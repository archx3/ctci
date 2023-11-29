/*
* Given two arrays of integers, compute the result of adding them as if each array represented a single integer.
*
* e.g. :
*    [1, 2, 3]
* [1, 2, 3, 4]
* ------------
* [2, 4, 6, 7]
* ------------
* */

function leftPad (arr, size) {
  let i = -1;

  while (++i < size) {
    arr.unshift(0);
  }

  return arr;
}

function add (num1, num2) {
  const SIZE_1 = num1.length;
  const SIZE_2 = num2.length;

  if (SIZE_1 === 0 && SIZE_2 === 0) {
    return 0;
  }

  if (SIZE_1 === 0) {
    // add all the digits in num2
    return num2;
  }

  if (SIZE_2 === 0) {
    // add all the digits of num1
    return num1;
  }

  // setting these reference values as if the SIZE of both arrays is equal, or that num1 is the largest array
  let largest = SIZE_1;

  if (SIZE_2 > SIZE_1) {
    largest = SIZE_2;

    // pad the smallest with the gap
    num1 = leftPad(num1, SIZE_2 - SIZE_1);
  } else {
    num2 = leftPad(num2,  SIZE_1 - SIZE_2)
  }

  let result = [];
  let carry = 0;
  let i = largest;

  while (--i > -1) {
    let columnAddResult = num1[i] + num2[i] + carry;

    if (columnAddResult >=10) {
      // columnAddResult = columnAddResult % 10; // this is correct but the below is more efficient cos we don't have to do a modulo operation
      carry = 1; // because there's no way adding two digits will be >= 20
      carry = Math.floor(columnAddResult / 10)
    } else {
      carry = 0;
    }

    result.unshift(columnAddResult);
  }

  if (carry) {
    result.unshift(carry);
  }

  return result
}

// console.log(add([1, 2, 3], [1, 2, 3, 4]));
// console.log(add([3, 5, 9], [9, 4, 9]))


function addMultiple (arrays) {
  let result = [];

  let longest = 0;
  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length > longest) {
      longest = arrays[i].length;
    }
  }

  for (let i = 0; i < arrays.length; i++) {
    if (arrays[i].length < longest) {
      arrays[i] = leftPad(arrays[i], longest - arrays[i].length);
    }
  }

  let i = longest;
  let carry = 0;
  while (--i > -1) {
    let columnSum = 0;
    for (let j = 0; j < arrays.length; j++) {
      columnSum += arrays[j][i];
    }
    columnSum += carry;

    if (columnSum >= 10) {
      carry = Math.floor(columnSum / 10);
      columnSum = columnSum % 10;
    } else {
      carry = 0;
    }

    result.unshift(columnSum);
  }

  return result;
}

console.log(addMultiple([[1, 2, 3], [1, 2, 3, 4], [1, 2, 3, 4, 5]]));

module.exports = {
  add,
  addMultiple
}
