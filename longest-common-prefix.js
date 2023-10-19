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

  // MSG: In order not to loop over every character of every word, we can first find the longest common prefix of the first and last words, then compare that prefix with the rest of the words.
  //  if the iniial check fails, we can return an empty string. also if a word does not contain the prefix, we return an empty string, nut this seems expensive because we first need to sort to find the shortest and longest words or we can just loop over the words to find the shortest and longest words. running substring check on each word will also result in implicit looping over the words.

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

// console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
// console.log(longestCommonPrefix(["dog","racecar","car"])) // ""
//


/**
 * Another common approach to solve this problem is to use the binary search algorithm.
 * This approach exploits the fact that, if a sequence is sorted, we can efficiently check if a segment of the sequence is a prefix of all strings.
 * In theory, this approach encompasses performing a binary search over the length of the answer. We first initialize the answer (low, high) pair as (0, minimum length of string). We then consider the string of median length per each iteration. We continue this process until low is less than high.
 * Below is a JavaScript implementation of this approach:
 *
 * In this code, isCommonPrefix is a helper function that checks if the prefix of the given length is common to all words. The binary search occurs in the longestCommonPrefix function. This algorithm has a time complexity of O(NM log M), with N being the number of strings and M being the maximum length of a string.
 *
 * @param {string[]} words
 * @return {string}
 */
var longestCommonPrefix_AI = function(words) {
  if(!words.length) return "";
  let minLen = Math.min(...words.map(word => word.length));
  let low = 0, high = minLen;

  while (low <= high) {
    let mid = (low + high) >> 1;
    if (isCommonPrefix(words, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return words[0].slice(0, (low + high) >> 1);
};

function isCommonPrefix(words, length) {
  let string = words[0].substring(0,length);
  for(let i = 1; i< words.length; i++)
    if(!words[i].startsWith(string))
      return false;
  return true;
};

console.log(longestCommonPrefix_AI(["flo","flow","flight"])) // "fl"
console.log(longestCommonPrefix_AI(["dog","racecar","car"])) // ""
console.log(longestCommonPrefix_AI(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix_AI(["denim", "den", "denise", "denzel"])) // "den"
