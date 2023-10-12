/*
String to Float (atof)
Medium

Implement the myAtof(string s) function, which converts a string to a 64-bit signed Floating Point number (Double) (similar to C/C++'s atof function).

The algorithm for myAtof(string s) is as follows:

1.  Read in and ignore any leading whitespace.
2.  Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
3.  Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
  Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
4.  If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
5.  Return the integer as the final result.

Note:

    Only the space character ' ' is considered a whitespace character.
    Do not ignore any characters other than the leading whitespace or the rest of the string after the digits.


Example 1:

Input: s = "42"
Output: 42
Explanation: The underlined characters are what is read in, the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^
The parsed integer is 42.
Since 42 is in the range [-2^31, (2^31) - 1], the final result is 42.


Example 2:

Input: s = "   -42"
Output: -42
Explanation:
Step 1: "   -42" (leading whitespace is read and ignored)
            ^
Step 2: "   -42" ('-' is read, so the result should be negative)
             ^
Step 3: "   -42" ("42" is read in)
               ^
The parsed integer is -42.
Since -42 is in the range [-2^31, (2^31) - 1], the final result is -42.


Example 3:

Input: s = "4193 with words"
Output: 4193
Explanation:
Step 1: "4193 with words" (no characters read because there is no leading whitespace)
         ^
Step 2: "4193 with words" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "4193 with words" ("4193" is read in; reading stops because the next character is a non-digit)
             ^
The parsed integer is 4193.
Since 4193 is in the range [-231, (2^31) - 1], the final result is 4193.


Constraints:

    0 <= s.length <= 200
    s consists of English letters (lower-case and upper-case), digits (0-9), ' ', '+', '-', and '.'.

*/


/**
 * @param {string} s
 * @return {number}
 */
const myAtof = function (s) {
  s = s.trim();
  const SIZE = s.length;
  let isNegative = false

  if (SIZE  === 0) {
    return 0;
  }
  let i = 0;
  if ((s[i] === "-" || s[i] === "+")) {
    if (SIZE > 1) {
      if (s[i] === "-") {
        isNegative = true;
      }
      i = 1;
    } else {
      return 0
    }
  }

  const ALLOWED_CHAR_SET = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "+"])
  let dotIndex = -1;
  let retrievedDigits = [];

  while (i < SIZE) {
    if (ALLOWED_CHAR_SET.has(s[i])) {
      retrievedDigits.push(s[i]);
    } else if(s[i] === "." && retrievedDigits.length > 0 && dotIndex < 0) {
      retrievedDigits.push(s[i]);
      dotIndex = i;
    } else {
      break;
    }

    i++;
  }

  if (retrievedDigits[retrievedDigits.length - 1] === ".") {
    retrievedDigits.pop();
  }

  let number = 0;
  let j = 0;
  const DIGITS_SIZE = retrievedDigits.length;

  while (j < DIGITS_SIZE) {
    if (retrievedDigits[j] === ".") {
      break;
    }
    number = number * 10 + Number(retrievedDigits[j]);
    j++;
  }


  if (dotIndex > 0)  {
    let divisor = 10;
    while (dotIndex < DIGITS_SIZE) {
      number += Number(retrievedDigits[dotIndex]) / divisor;
      divisor *= 10;
      dotIndex++;
    }
  }

  number = isNegative ? -number : number;

  if (number >= -2147483648 && number <= 2147483648) {
    return number
  } else if (isNegative) {
    return -2147483648
  }

  return 2147483647
};

console.log(myAtof("42"));
console.log(myAtof("   -42"));
console.log(myAtof("   -42."));
console.log(myAtof("   -42.1"));
console.log(myAtof("   -42.1.1"));
console.log(myAtof("4193 with words"));
