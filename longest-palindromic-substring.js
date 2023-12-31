/**
 * Given a string s, return the longest palindromic substring in s
 * Example 1:
 *
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 *
 * Example 2:
 *
 * Input: s = "cbbd"
 * Output: "bb"
 *
 * Constraints:
 *
 *     1 <= s.length <= 1000
 *     s consist of only digits and English letters.
 */
const isPalindrome = require('./is-palindrome');

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let SIZE = s.length;
  let left = 0
  let right = 1;

  let subsequences = new Set();

  while (left < SIZE) {
    subsequences.add(s.substring(left, right));
    ++right;

    if (right > SIZE) {
      left++;
      right = left + 1;
    }
  }

  let longestPalindrome = '';

  subsequences.forEach(subsequence => {
    if (isPalindrome(subsequence) && subsequence.length > longestPalindrome.length) {
      longestPalindrome = subsequence;
    }
  });

  return { longestPalindrome, subsequences };
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('bb'));
console.log(longestPalindrome("xiqhechagdpbcdthaafmcnplenylepawbafsmxqlwhzgqmuemwolgoockcafchdsfggulwfzwwkvivnwgbelbbydzfkcfsschvbantskuosunhqihmqjmzgavfnonwhwrkfxgcbowfsebthbrhhklxxyoxiphrgxqodulrbbvdwcclpyjhljgyypztbqzkiyzbfnvnoargyyakaidkiyleurvjbadzwqjtrluayhblhdokmwrwhassruxpftwlbalfvwxtfcqibywsusrlwmbcibvgwnmmdmuhswuperbjoxarhqcpcebbtyhnrouvuwftspmzsmdhfcqovffkuikzrcweffmpnjldoalhcvqvjavllvajvqvchlaodljnpmffewcrzkiukffvoqcfhdmszmpstfwuvuornhytbbecpcqhraxojbrepuwshumdmmnwgvbicbmwlrsuswybiqcftxwvflablwtfpxurssahwrwmkodhlbhyaulrtjqwzdabjvruelyikdiakayygraonvnfbzyikzqbtzpyygjlhjyplccwdvbbrludoqxgrhpixoyxxlkhhrbhtbesfwobcgxfkrwhwnonfvagzmjqmhiqhnusoukstnabvhcssfckfzdybblebgwnvivkwwzfwluggfsdhcfackcooglowmeumqgzhwlqxmsfabwapelynelpncmfaahtdcbpdgahcehqix"));
// console.log(longestPalindrome('a'));
// console.log(longestPalindrome('ac'));


/**
 * The function you have provided is used to find the longest palindrome in a string. While the implementation works fine, it can be best optimized by using the Manacher’s Algorithm. The Manacher's algorithm is linear in regard to the inputs because it avoids redundant checks using the information from previous checks.
 * Below is a more efficient version of your function using Manacher's algorithm:
 *
 * This JavaScript function accomplishes the same task but in a much more efficient way. This enhanced function still finds the longest palindrome in a string, but using the Manacher’s Algorithm, it completes the process with a time complexity of O(n).
 * Note: Complexity of Manacher's algorithm has a best case of O(n) due to its linear nature and efficient palindrome calculation. In any case, this proposed function operates in a much more efficient manner than the originally provided function which operated with an O(n^2).
 */

function expandAroundCenter (s, left, right) {
  let L = left, R = right;
  while (L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)) {
    L--;
    R++;
  }
  return R - L - 1;
};

 /*
 * @param {string} s
 * @return {string}
 */
function longestPalindrome_AI(s) {
  if (s === null || s.length < 1) return ""; // Check for edge cases
  let start = 0, end = 0;
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
}


/**
 *
 * here is another approach to solving this problem using dynamic programming.
 * The dynamic programming solution has a time complexity of O(n^2), where n is the length of the input string.
 * However, its space complexity is also O(n^2) due to the use of a 2D array.
 *
 * This JavaScript function finds the longest palindromic substring using dynamic programming. The 2D dp array represents whether the substring s[j..i] is a palindrome. If dp[j][i] is true and i-j is larger than end-start, update start and end.
 * Although the time complexity of the dynamic programming approach is the same as the brute force approach, the dynamic programming approach avoids redundancy by storing the palindrome results for smaller strings in a table from which it fetches the results directly to solve larger sub-problems. Note that the space complexity is higher (O(n^2)) for the Dynamic Programming approach since it uses a 2D matrix.
 *
 * @param {string} s
 * @return {string}
 */
function longestPalindrome_AI_2 (s) {
  if (!s || s.length < 2) {
    return s;
  }
  let start = 0, end = 0;
  let n = s.length;
  // dp[i][j] will be 'true' if the string from index i to j is a palindrome.
  let dp = new Array(n).fill(false).map(() => new Array(n).fill(false));

  for (let i = 0; i < n; i++) { // All substrings with single character are palindromes. So, initializing dp[i][i] as 'true'.
    dp[i][i] = true;
    for (let j = 0; j < i; j++) { // substring s[j..i]
      dp[j][i] = (s[j] === s[i] && (i - j < 3 || dp[j + 1][i - 1]));
      if (dp[j][i] && end - start < i - j) {
        start = j;
        end = i;
      }
    }
  }
  return s.substring(start, end + 1);
}

