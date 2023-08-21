/**
 * Subtracts two numbers.
 * Given two arrays of integers, each array representing a number, return an array representing the difference of the two numbers.
 *
 * @param a {Array<number>}
 * @param b {Array<number>}
 * @returns {number}
 */

const leftPad = require("./utils").leftPad;

function subtract(a, b) {
  let result = [];

  const SIZE_A = a.length;
  const SIZE_B = b.length;
  let MAX_INDEX = SIZE_A - 1

  let SIZE_DIFF = Math.abs(SIZE_A - SIZE_B);

  if (SIZE_DIFF > 0) {
    if (SIZE_A > SIZE_B) {
      b = leftPad(b, SIZE_DIFF);
    } else {
      a = leftPad(a, SIZE_DIFF);
      MAX_INDEX = SIZE_B - 1;
    }
  }

  let i = MAX_INDEX;
  let carry = 0

  while (i >= 0) {
    let diff;

    console.log(`a[${i}], b[${i}], ${a[i]}, ${b[i]}`)

    if (a[i] < b[i]) {
      if (typeof a[i - 1] !== "undefined") {

        if (a[i - 1] === 0) {
          diff = (b[i]) - a[i];
        } else {
          diff = (a[i] + 10) - b[i];
          a[i - 1] = a[i - 1] - 1;
        }
      } else {
        diff = "-"
      }
    } else {
      diff = (a[i]) - b[i];
    }

    result.unshift(diff);

    i--
  }

  return result;
}

console.log(subtract([2, 0, 0], [1, 5, 0]))
console.log(subtract([2, 0], [1, 5, 0]))
console.log(subtract([1, 5, 0], [2, 0, 0], ))
