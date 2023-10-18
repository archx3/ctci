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
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix = function(words) {
  const WORDS_SIZE = words.length;

  words = words.sort((a,b) => a.length - b.length);

  let prefixCharArray = [];
  const FIRST_WORD = words[0];

  const FIRST_WORD_SIZE = FIRST_WORD.length;


  let charAtIndexIsSameForAllWords = true;

  for (let charIndex = 0; charIndex < FIRST_WORD_SIZE; charIndex++) {
    let char = FIRST_WORD[charIndex];

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

  if (!prefixCharArray.length) {
    return ""
  }

  return prefixCharArray.join("")
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
