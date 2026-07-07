/*
Longest Substring Without Repeating Characters
**Medium**
Given a string s, find the length of the longest substring
without duplicate characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.



Constraints:

    0 <= s.length <= 5 * 104
    s consists of English letters, digits, symbols and spaces.

*/


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringNw = function (s) {
  const SIZE = s.length;
  if (!s || SIZE < 1) {
    return 0;
  }

  if (SIZE === 1) {
    return 1
  }

  let result = 0;
  let currentResult = 0;

  let i = 0;
  const seen = new Set();

  while (i < SIZE) {
    if (seen.has(s[i])) {
      if (currentResult > result) {
        result = currentResult;
      }
      console.log(i, s[i], seen, currentResult)
      currentResult = 0;
      seen.clear();
      continue;
    }
    currentResult += 1;
    seen.add(s[i])
    console.log(i, s[i], seen, currentResult)
    if (currentResult > result) {
      result = currentResult;
    }

    i++;
  }
  return result;
};

// console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// console.log(lengthOfLongestSubstring("bbbbb")) // 1
// console.log(lengthOfLongestSubstring("pwwkew")) // 3
// console.log(lengthOfLongestSubstring("")) // 0
// console.log(lengthOfLongestSubstring(" ")) // 1
// console.log(lengthOfLongestSubstring("au")) // 2
// console.log(lengthOfLongestSubstring("aab")) // 2
// console.log(lengthOfLongestSubstring("dvdf")) // 3
// console.log(lengthOfLongestSubstring("anviaj")) // 5
// console.log(lengthOfLongestSubstring("ohvhjdml")) // 6
// console.log(lengthOfLongestSubstring("tmmzuxt")) // 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const SIZE = s.length;
  if (!s || SIZE < 1) {
    return 0;
  }

  if (SIZE === 1) {
    return 1
  }

  let head = 0;
  let tail = 0;
  let seen = new Set();

  let currentResult = 0;
  let result = 0;

  while (tail < SIZE) {
    // const SEEN_SIZE = seen.size;
    // console.log({ tail, head }, seen, s[head])
    const char = s[head];
    if (head >= SIZE - 1) {
      if (tail === SIZE -2) {
        break;
      }
      seen.add(char);

      // if (seen.size > 0) {
        currentResult = seen.size;
        // currentResult = 0;
        if (currentResult > result) {
          result = currentResult;
          currentResult = 0;
        }
        // seen.clear();
        seen = new Set();
      // }

      tail++;
      head = tail; //reset head
      continue;
    }
    if (seen.has(char)) {
      currentResult = seen.size;
      // currentResult = 0;
      if (result < currentResult) {
        result = currentResult;
        currentResult = 0;
      }
      // seen.clear();
      seen = new Set();
      tail++;
      head = tail; //reset head
    }
    seen.add(char);
    head++;
  }
  return result
}

console.time("lengthOfLongestSubstringNw")
console.log("abcabcbb",lengthOfLongestSubstring("abcabcbb")) // 3
console.timeEnd("lengthOfLongestSubstringNw")
// console.time("lengthOfLongestSubstringNw")
// console.log("bbbbb",lengthOfLongestSubstring("bbbbb")) // 1
// console.timeEnd("lengthOfLongestSubstringNw")
// console.log("pwwkew",lengthOfLongestSubstring("pwwkew")) // 3
// console.log("",lengthOfLongestSubstring("")) // 0
// console.log(" ",lengthOfLongestSubstring(" ")) // 1
// console.log("au",lengthOfLongestSubstring("au")) // 2
// console.log("aab",lengthOfLongestSubstring("aab")) // 2
// console.log("dvdf",lengthOfLongestSubstring("dvdf")) // 3
// console.log("anviaj",lengthOfLongestSubstring("anviaj")) // 5
// console.log("ohvhjdml",lengthOfLongestSubstring("ohvhjdml")) // 6
// console.log("tmmzuxt",lengthOfLongestSubstring("tmmzuxt")) // 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s || s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return 1
  }

  let maxLength = 0;
  let left = 0;
  let right = 0
  const charIndexMap = new Map();

  while (right < s.length) {
    const char = s[right];
    console.log({ left, right, char }, charIndexMap, )

    // If character is already seen and is within the current window
    if (charIndexMap.has(char) && charIndexMap.get(char) >= left) {
      left = charIndexMap.get(char) + 1;
    }

    charIndexMap.set(char, right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++
  }

  return maxLength;
};
console.time("lengthOfLongestSubstringNw")
console.log("abcabcbb",lengthOfLongestSubstring("abcabcbb")) // 3
console.timeEnd("lengthOfLongestSubstringNw")
