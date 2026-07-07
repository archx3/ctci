// -2+4x5-6/7^2

// using shunting yard algorithm

// 1. convert infix to postfix
// example: -2+4x5-6/7^2 becomes 2-45x672^-/-

const TOKEN_TYPES = {
  "-" : {
    type : 'operator',
    value : 'MINUS'
  },
  "+" : {
    type : 'operator',
    value : 'PLUS'
  },
  "x" : {
    type : 'operator',
    value : 'MULTIPLY'
  },
  "/" : {
    type : 'operator',
    value : 'DIVIDE'
  },
  "^" : {
    type : 'operator',
    value : 'POWER'
  },
  "0" : {
    type : 'number',
    value : 0
  },
  "1" : {
    type : 'number',
    value : 1
  },
  "2" : {
    type : 'number',
    value : 2
  },
  "3" : {
    type : 'number',
    value : 3
  },
  "4" : {
    type : 'number',
    value : 4
  },
  "5" : {
    type : 'number',
    value : 5
  },
  "6" : {
    type : 'number',
    value : 6
  },
  "7" : {
    type : 'number',
    value : 7
  },
  "8" : {
    type : 'number',
    value : 8
  },
  "9" : {
    type : 'number',
    value : 9
  },
  "." : {
    type : 'number',
    value : '.'
  },
  "(" : {
    type : 'parenthesis',
    value : 'LEFT_PAREN'
  },
  ")" : {
    type : 'parenthesis',
    value : 'RIGHT_PAREN'
  },
  " " : {
    type : 'whitespace',
    value : 'WHITESPACE'
  }
}

// const expression = '-2+64x5-6/7^2';
const expression = '2+6';
let pos = 0;

const SIZE = expression.length;

function getNextLexeme() {
  return expression[pos++];
}

function tokenize(expression) {
  const numberBuffer = [];
  const tokens = [];

  while (pos < SIZE - 1) {
    const token = getNextLexeme();

    if (token === ' ') {
      continue;
    }

    if (TOKEN_TYPES[token] && TOKEN_TYPES[token].type === 'number') {
      numberBuffer.push(token);
    } else {
      if (numberBuffer.length > 0) {
        tokens.push({
          type : 'number',
          value : parseFloat(numberBuffer.join(''))
        });
        numberBuffer.length = 0;
      }

      if (TOKEN_TYPES[token]) {
        tokens.push(TOKEN_TYPES[token]);
      }
    }
  }

  if (numberBuffer.length > 0) {
    tokens.push({
      type : 'number',
      value : parseFloat(numberBuffer.join(''))
    });
    numberBuffer.length = 0;
  }

  return tokens;
 }

 function precedence(token) {
  if (token.value === 'PLUS' || token.value === 'MINUS') {
    return 1;
  } else if (token.value === 'MULTIPLY' || token.value === 'DIVIDE') {
    return 2;
  } else if (token.value === 'POWER') {
    return 3;
  }
  return 0;
 }

 function isRightAssociative(token) {
   return token.value === 'POWER';
 }

function infixToPostfix(tokens) {
  const outputQueue = [];
  const operatorStack = [];

  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];

    if (token.type === 'number') {
      outputQueue.push(token);
    } else if (token.type === 'operator') {
      while (
        operatorStack.length > 0 &&
        operatorStack[operatorStack.length - 1].type === 'operator' &&
        (
          (isRightAssociative(token) && precedence(operatorStack[operatorStack.length - 1]) > precedence(token)) ||
          (!isRightAssociative(token) && precedence(operatorStack[operatorStack.length - 1]) >= precedence(token))
        )
      ) {
        outputQueue.push(operatorStack.pop());
      }
      operatorStack.push(token);
    } else if (token.type === 'parenthesis') {
      if (token.value === 'LEFT_PAREN') {
        operatorStack.push(token);
      } else if (token.value === 'RIGHT_PAREN') {
        while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1].value !== 'LEFT_PAREN') {
          outputQueue.push(operatorStack.pop());
        }
        operatorStack.pop(); // Pop the left parenthesis
      }
    }
  }

  while (operatorStack.length > 0) {
    outputQueue.push(operatorStack.pop());
  }

  return outputQueue;
}

function evaluatePostfix(postfixTokens) {
  const stack = [];

  for (const element of postfixTokens) {
    const token = element;

    if (token.type === 'number') {
      stack.push(token.value);
      console.log(`Pushed number ${token.value} onto stack`);
    } else if (token.type === 'operator') {
      const b = stack.pop();
      const a = stack.pop();

      console.log(`Applying operator ${token.value} to operands ${a} and ${b}`);

      switch (token.value) {
        case 'PLUS':
          stack.push(a + b);
          break;
        case 'MINUS':
          stack.push(a - b);
          break;
        case 'MULTIPLY':
          stack.push(a * b);
          break;
        case 'DIVIDE':
          stack.push(a / b);
          break;
        case 'POWER':
          stack.push(Math.pow(a, b));
          break;
      }
    }
  }

  return stack.pop();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    tokenize,
    precedence,
    isRightAssociative,
    infixToPostfix,
    evaluatePostfix
  };
}
