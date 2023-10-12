/**
 * Given an array of digits, return the number they correspond to
 *
 * e.g.:
 * [1, 2, 3] => 123
 *
 * [1, 2, 3, 4] => 1234
 *
 * [0, 0, 0, 1, 2, 3, 4] => 1234
 */

function digitsArrayToNumber (digits) {
  const SiZE = digits.length;

  let number = digits[0]
  let i = 1;

  while (i < SiZE) {
    number = number * 10 + digits[i];
    i++;
  }

  return number;
}

console.log(digitsArrayToNumber([1, 2, 3]));
console.log(digitsArrayToNumber([1, 5, 0]));
