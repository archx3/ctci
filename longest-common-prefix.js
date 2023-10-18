/**
 * Write a function to find the longest common prefix string amongst an array of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 * Example 1:
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 * Example 2:
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 * Constraints:
 *
 *     1 <= strs.length <= 200
 *     0 <= strs[i].length <= 200
 *     strs[i] consists of only lowercase English letters.
 */

/**
 *
 * This implementation preserves the same time complexity as the previous version: O(NM), with N being the number of words and M being the average length of a word. This is because the premise of this problem necessitates us to at the very minimum iterate over every character of every word, which directly leads to the O(NM) time complexity.
 *
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix = function(words) {
  const WORDS_SIZE = words.length;

  // words = words.sort((a,b) => a.length - b.length);
  // const SHORTEST_WORD = words[0];

  let SHORTEST_WORD = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length < SHORTEST_WORD.length) {
      SHORTEST_WORD = words[i];
    }
  }

  let prefixCharArray = [];

  const SHORTEST_WORD_SIZE = SHORTEST_WORD.length;


  let charAtIndexIsSameForAllWords = true;

  for (let charIndex = 0; charIndex < SHORTEST_WORD_SIZE; charIndex++) {
    let char = SHORTEST_WORD[charIndex];

    let wordIndex = 0;
    while (wordIndex < WORDS_SIZE) {
      if (words[wordIndex][charIndex] !== char) {
        charAtIndexIsSameForAllWords = false
        break;
      }

      if (wordIndex === WORDS_SIZE - 1) {
        if (charAtIndexIsSameForAllWords === true) {
          prefixCharArray.push(char)
        } else {
          break
        }
      }

      wordIndex ++;
    }
  }

  return prefixCharArray.join("")
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""


/**
 *
 * Here is a more efficient solution for finding the longest common prefix in a set of words. Instead of comparing each string to every other string, we will determine the shortest and longest words in the input array. We focus on these two because the longest common prefix cannot be longer than the shortest word, and it must be a prefix of the longest word as well. We then check character-by-character from the beginning of the shortest and longest words until we find a mismatch. The common prefix up to this point is our longest common prefix.
 *
 * This approach simplifies the problem and runs faster, especially when dealing with large arrays of words. It does not need to sort the words array and reduces the number of checks to be performed. The time complexity is O(n), where n is the sum of the lengths of the shortest and longest words, and the space complexity is O(1), which is significantly more efficient than the previous implementation.
 *
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix_AI = function(words) {
  if (words.length === 0) return "";
  let min = words.reduce((a, b) => a.length <= b.length ? a : b);
  let max = words.reduce((a, b) => a.length >= b.length ? a : b);
  for (let i = 0; i < min.length; i++) {
    if (min[i] !== max[i]) {
      return min.substr(0, i);
    }
  }
  return min;
};


console.log(longestCommonPrefix_AI(["flowe","flow","adight"])) // "fl"
