/**
 * The Luhn algorithm is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers in the US, and Canadian Social Insurance Numbers.
 * It was created by IBM scientist Hans Peter Luhn and described in U.S. Patent No. 2,950,048, filed on January 6, 1954, and granted on August 23, 1960.
 * It is not intended to be a cryptographically secure hash function; it was designed to protect against accidental errors, not malicious attacks.
 *
 * It works as follows:
 * 1. Starting from the rightmost digit, double the value of every second digit (e.g., 7 becomes 14).
 * 2. If the result of this doubling operation is greater than 9 (e.g., 14 becomes 1 + 4 = 5), then add the digits of the result (e.g., 10: 1 + 0 = 1, 14: 1 + 4 = 5).
 * 3. Take the sum of all the digits.
 * 4. If the total modulo 10 is equal to 0 (if the total ends in zero) then the number is valid according to the Luhn formula; else it is not valid.
 *
 */

/**
 * Calculates the Luhn checksum for a given ID.
 *
 * @param {string} id - The ID to calculate the checksum for.
 * @returns {boolean} - True if the checksum is valid, false otherwise.
 */
function luhnChecksum(id) {
  let digits = id.split("");

  // double all digits
  digits = digits.map((digit, index) => {
    if ((index + 1) % 2 === 0) {
      return digit * 2;
    }
    return digit;
  });

  let sum = digits.reduce((acc, curr) => {
    if (curr > 9) {
      curr = curr.toString().split("").reduce(( acc, curr) => parseInt(curr) + acc, 0)
    }
    return curr + acc
  }, 0);

  return sum % 10 === 0;
}

console.log(luhnChecksum("1234567890123456"))
console.log(luhnChecksum("1762483"))
