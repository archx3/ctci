/*
* Valid Parentheses
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
* */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (typeof s !== "string" || s.length < 1) {
    return false;
  }

  const bracketPairs = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };

  const bracketsStack = [];

  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] in bracketPairs) {
      bracketsStack.push(s[i]);
      continue;
    }

    if (bracketPairs[bracketsStack.pop()] !== s[i]) {
      return false;
    }
  }

  return bracketsStack.length === 0;
};


console.log(isValid('()[{}]'));
console.log(isValid('(]'));
console.log(isValid('([)]'));
console.log(isValid('{[]}'));
