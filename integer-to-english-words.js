/**
 * Integer to English Words
 * Convert a non-negative integer num to its English words representation.
 *
 * Example 1:
 *
 * Input: num = 123
 * Output: "One Hundred Twenty Three"
 *
 * Example 2:
 *
 * Input: num = 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 *
 * Example 3:
 *
 * Input: num = 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 *
 * Constraints:
 *
 *     0 <= num <= 231 - 1
 */

const VALUES_MAP = new Map([
  [1000_000_000_000, "Trillion"],
  [1000_000_000, "Billion"],
  [1000_000, "Million"],
  [1000, "Thousand"],
  [100, "Hundred"],
  [90, "Ninety"],
  [80, "Eighty"],
  [70, "Seventy"],
  [60, "Sixty"],
  [50, "Fifty"],
  [40, "Forty"],
  [30, "Thirty"],
  [20, "Twenty"],
  [19, "Nineteen"],
  [18, "Eighteen"],
  [17, "Seventeen"],
  [16, "Sixteen"],
  [15, "Fifteen"],
  [14, "Fourteen"],
  [13, "Thirteen"],
  [12, "Twelve"],
  [11, "Eleven"],
  [10, "Ten"],
  [9, "Nine"],
  [8, "Eight"],
  [7, "Seven"],
  [6, "Six"],
  [5, "Five"],
  [4, "Four"],
  [3, "Three"],
  [2, "Two"],
  [1, "One"]
])

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {

  if (num === 0) return 'Zero';

  let words = '';

  for (const [value, word] of VALUES_MAP) {
    let frequency = 0;
    while (num >= value) {
      num -= value;
      frequency += 1;
    }

    if (frequency > 0) {
      if (value >= 100) {
        words += numberToWords(frequency) + ' ' + word
      } else {
        words += word
      }

      if (num > 0) {
        words += ' '
      }
    }
  }


  return words

};

/**
 * Your code (Above) is quite efficiently structured and performant from an algorithmic perspective; it iterates over the VALUES_MAP object, subtracts the value from the number until the number becomes less than the value, and then feeds the result to the output string.
 * However, you could make your code more readable and slightly optimize it by:
 * Moving const VALUES_MAP out of numberToWords function to the global scope, as this array isn't changing between runs.
 * Storing frequency directly without a separate iteration.
 * Avoiding string concatenations in a loop since JavaScript interpreter might create a new string in memory for each concatenation which potentially may cause higher memory usage in case of huge iterations. Use an array and finally join all elements, that is usually more efficient.
 * You could also simplify the final conditional check for num > 0, but since the improvement would be minor, it's more important to maintain code readability.
 * Here is your optimized code:
 *
 * @param {number} num
 * @return {string}
 */
const numberToWords_AI = function(num) {
  if (num === 0) return 'Zero';
  let words = [];
  for (const [value, word] of VALUES_MAP) {
    let frequency = Math.floor(num / value);
    if(frequency > 0){
      num -= value * frequency;
      if (value >= 100) {
        words.push(numberToWords(frequency) + ' ' + word);
      } else {
        words.push(word);
      }
    }
  }
  return words.join(' ');
};

const numbers = [
  123,
  12345,
  1234567,
  1_234_567_891,
  0,
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000,

]

for (const number of numbers) {
  console.log(number, "->", numberToWords(number))
}
