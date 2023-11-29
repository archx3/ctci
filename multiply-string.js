/**
 * Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
 *
 * Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.
 *
 * Example 1:
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 * Constraints:
 * 1 <= num1.length, num2.length <= 200
 * num1 and num2 consist of digits only.
 * Both num1 and num2 do not contain any leading zero, except the number 0 itself.
 *
 *
 */
const { leftPad, rightPad } = require("./utils");
const {addMultiple} = require("./add");

/*const multiplyString = function multiplyString(num1, num2) {
  const NUM_1_SIZE = num1.length;
  const NUM_2_SIZE = num2.length;

  let largest = NUM_1_SIZE;
  let smallest = NUM_2_SIZE;

  if (NUM_2_SIZE > NUM_1_SIZE) {
    largest = NUM_2_SIZE;
    smallest = NUM_1_SIZE;

    num1 = leftPad(Array.from(num1), NUM_2_SIZE - NUM_1_SIZE).join("");
  } else {
    num2 = leftPad(Array.from(num2), NUM_1_SIZE - NUM_2_SIZE).join("");
  }

  let result = [];

  for (let i = 0; i < largest; i++) {
    result.push([]);
  }

  let i = largest;

  while (--i >= 0) {
    let j = largest;
    let carry = 0;

    while (--j >= 0) {
      let product = (num1[i] * num2[j]) + carry;
      carry = Math.floor(product / 10);

      if (i === largest - 1) {
        result[i].unshift(product % 10);
      } else {
        result[i][j] = product % 10;

        result[i - 1].unshift(product % 10);


        if (carry > 0 && j <= 0) {
          result[i].unshift(carry);
        }
      }
    }
  }

  // for (let i = 0; i < largest; i++) {
  //   result[i] = rightPad(result[i], largest - i - 1, 0);
  // }

  return result;
}*/

/**
 * Multiplies two strings containing numbers.
 *
 * @param {string} num1 - The first number.
 * @param {string} num2 - The second number.
 * @returns {string} - The result of multiplying the two strings.
 */
const multiplyStringSimple = function multiplyString (num1, num2) {
  const NUM_1_SIZE = num1.length;
  const NUM_2_SIZE = num2.length;

  const LONGEST_SEQUENCE_SIZE = NUM_1_SIZE + NUM_2_SIZE;
  let largest = NUM_1_SIZE;
  // let smallest = NUM_2_SIZE;

  if (NUM_2_SIZE > NUM_1_SIZE) {
    largest = NUM_2_SIZE;
    // smallest = NUM_1_SIZE;

    num1 = leftPad(Array.from(num1), NUM_2_SIZE - NUM_1_SIZE).join("");
  } else {
    num2 = leftPad(Array.from(num2), NUM_1_SIZE - NUM_2_SIZE).join("");
  }

  console.log({ num1, num2, largest }, "\n")

  let result = [];

  for (let i = 0; i < largest; i++) {
    result.push([]);
  }

  let i = largest;

  let currentRow = 0;
  while (--i >= 0) {
    let j = largest;
    let carry = 0;

    while (--j >= 0) {
      let product = (num1[i] * num2[j]) + carry;
      let value = product % 10;

      // if (i === largest - 1) { // first row
        result[i].unshift(value);
      // }
      carry = Math.floor(product / 10);

      if (carry > 0 && j <= 0) {
        result[i].unshift(carry);
        carry = 0;
      }

    }

    if (i !== largest - 1) {
      currentRow++;
    }
  }

  for (let i = 0; i < largest; i++) {
    result[i] = rightPad(result[i], largest - i - 1, 0);

    while (result[i][0] === 0) {
      result[i].shift();
    }
  }

  return addMultiple(result);
}

/**
 * Multiplies two strings containing numbers.
 *
 * @param {string} num1 - The first number.
 * @param {string} num2 - The second number.
 * @returns {string} - The result of multiplying the two strings.
 */
const multiplyString = function multiplyString (num1, num2) {
  const NUM_1_SIZE = num1.length;
  const NUM_2_SIZE = num2.length;

  const LONGEST_SEQUENCE_SIZE = NUM_1_SIZE + NUM_2_SIZE;
  let largest = NUM_1_SIZE;
  // let smallest = NUM_2_SIZE;

  if (NUM_2_SIZE > NUM_1_SIZE) {
    largest = NUM_2_SIZE;
    // smallest = NUM_1_SIZE;

    num1 = leftPad(Array.from(num1), NUM_2_SIZE - NUM_1_SIZE).join("");
  } else {
    num2 = leftPad(Array.from(num2), NUM_1_SIZE - NUM_2_SIZE).join("");
  }

  console.log({ num1, num2, largest }, "\n")

  let result = [];

  let i = largest;

  let currentRow = 0;
  while (--i >= 0) {
    let j = largest;
    let carry = 0;

    while (--j >= 0) {
      // while (j-- === largest) {
      let product = (num1[i] * num2[j]) + carry;
      let value = product % 10;


      if (i === largest - 1) { // first row
        console.log({ n1: num1[i], n2: num2[j], product: num1[i] * num2[j], carry, f: product, value })
        result.unshift(value);
        // console.log({value, i, j, c })
      } else { // other rows
        // let index = (result.length - 1) - c;

        // let's create the index for the current row
        let index = j - currentRow;

        console.log({ n1: num1[i], n2: num2[j], product: num1[i] * num2[j], carry, f: product, value })
        console.log({ index, count: result.length, i, j, c: currentRow })
        if (result.at(currentRow) === undefined) {
          result.unshift(value);
        } else {
          result[index] = (result[index] + value) % 10;
        }
      }

      carry = Math.floor(product / 10);

      if (carry > 0 && j <= 0) {
        console.log("carry: ", carry, "unloadeed")
        result.unshift(carry);
        carry = 0;
      }
      console.log('\n', { result, carry })
    }

    if (i !== largest - 1) {
      currentRow++;
    }
  }

  // for (let i = 0; i < largest; i++) {
  //   result[i] = rightPad(result[i], largest - i - 1, 0);
  // }

  return result;
}

// console.log(multiplyString ("10", "5"));
// console.log(multiplyString ("10", "25"));
// console.log(multiplyString ("123", "456"));
// console.log(multiplyString ("6", "423", ));
// console.log(multiplyString ("56", "423", ));
// console.log(multiplyString ("456", "423", ));
//

/*  while (--i >= 0) {

    let j = smallest - 1;
    while (j >= 0) {
      let carry = 0;
      if (i === largest - 1) {
        console.log({n1 : num1[i], n2 : num2[j], carry, j })
        let product = (num1[i] * num2[j]) + carry;

        result.unshift(product % 10);
        carry = Math.floor(product / 10);

        if (carry > 0 && j <= 0) {
          result.unshift(carry);
        }
      } else {
        // result.unshift(num1[i] * num2[j]);
        /!*if(result[j - 1] === undefined) {
          result.unshift(num1[i] * num2[j]);

        } else {
          let sum = result[j - 1] + (num1[i] * num2[j]);
          result[j - 1] = sum % 10;

          if(sum > 9) {
            if (result[j - 2] === undefined) {
              result.unshift(Math.floor(sum / 10));
            } else {
              result[j - 2] = result[j - 2] + Math.floor(sum / 10);
            }
          }
        }*!/
      }

     j--;
    }
  }*/


/**
 * Multiplies two strings containing numbers.
 *
 * @param {string} num1 - The first number.
 * @param {string} num2 - The second number.
 * @returns {string} - The result of multiplying the two strings.
 */
const multiplyStringAI = function multiplyString (num1, num2) {
  let NUM_1_SIZE = num1.length;
  let NUM_2_SIZE = num2.length;
  let result = Array(NUM_1_SIZE + NUM_2_SIZE).fill(0);

  let i = NUM_1_SIZE
  while (--i >= 0) {
    let j = NUM_2_SIZE;
    while (--j >= 0) {
      let higherIdx = i + j;
      let lowerIdx = i + j + 1;
      let sum = result[lowerIdx] + Number(num1[i]) * Number(num2[j]);

      console.log({ n1: num1[i], n2: num2[j], sum, hI: higherIdx, lI: lowerIdx })
      console.log({ result }, '\n')

      result[higherIdx] += Math.floor(sum / 10);
      result[lowerIdx] = sum % 10;
    }


  }
  console.log({ result })

  // Removing leading zeros
  while (result[0] === 0) {
    result.shift();
  }

  // Convert digits to string and join
  return result.length ? result.join('') : '0';
}

// console.log(multiplyStringAI ("456", "423", ));
console.log(multiplyStringSimple ("5", "10", ));
console.log(multiplyStringSimple ("10", "5", ));
console.log(multiplyStringSimple ("10", "25", ));
console.log(multiplyStringSimple ("123", "456", ));
console.log(multiplyStringSimple ("6", "423", ));
console.log(multiplyStringSimple ("56", "423", ));
console.log(multiplyStringSimple ("456", "423", ));
