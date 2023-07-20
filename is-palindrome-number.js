/**
 * Given an integer x, return true if x is a
 * palindrome
 * , and false otherwise.
 *
 *
 *
 * Example 1:
 *
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 *
 * Input: x = -121
 * Output: false
 * Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
 *
 * Example 3:
 *
 * Input: x = 10
 * Output: false
 * Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 *
 *
 *
 * Constraints:
 *
 *     -231 <= x <= 231 - 1
 *
 *
 * Follow up: Could you solve it without converting the integer to a string?
 * Accepted
 * 3.4M
 * Submissions
 * 6.3M
 * Acceptance Rate
 * 54.0%
 * Seen this question in a real interview before?
 * 1/4
 * Yes
 * No
 * Discussion (200)
 * Similar Questions
 * Palindrome Linked List
 * Easy
 * Find Palindrome With Fixed Length
 * Medium
 * Strictly Palindromic Number
 * Medium
 * Related Topics
 * Math
 * Copyright ©️ 2023 LeetCode All rights reserved
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindromeNumber = function(x) {
    if (typeof x !== "number" || x < 0) {
      return false;
    }

    let reversed = 0;
    let original = x;

    while (x > 0) {
      reversed = (x % 10) + (reversed * 10);
      x = Math.floor(x / 10)
    }

    reversed = original % 10 === 0 ? reversed * 10 : reversed;
    return reversed === original;
};

console.log(isPalindromeNumber(1221));
console.log(isPalindromeNumber(-1221));
console.log(isPalindromeNumber(120) === 21);
