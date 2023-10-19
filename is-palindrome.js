function isPalindrome (str) {
  if (typeof str !== "string") {
    return false;
  }

  let len = str.length;

  if (len < 1) {
    return false;
  }

  if (len === 1) {
    return true;
  }

  let i = 0;

  while (i <= len / 2) {
    if (str[i] !== str[len - (i + 1)]) {
      return false
    }
    i++;
  }

  return true
}

// console.log('', isPalindrome(''));
// console.log('a', isPalindrome('a'));
// console.log('aa', isPalindrome('aa'));
// console.log('aaa', isPalindrome('aaa'));
// console.log('aba', isPalindrome('aba'));
// console.log('abba', isPalindrome('abba'));
// console.log('abca', isPalindrome('abca'));

module.exports = isPalindrome;
