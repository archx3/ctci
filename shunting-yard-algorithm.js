/**
 * Shunting-yard algorithm
 *
 * The shunting-yard algorithm is a method for parsing mathematical expressions specified in infix notation.
 * It can produce either a postfix notation string, also known as Reverse Polish notation (RPN), or an abstract syntax tree (AST).
 * The algorithm was invented by Edsger Dijkstra and named the "shunting yard" algorithm because its operation resembles that of a railroad shunting yard.
 * https://en.wikipedia.org/wiki/Shunting-yard_algorithm
 *
 * In this algorithm, we will use a stack to store the operators. and a queue to store the operands.
 * then we will iterate over the input string, and for each character, we will check if it is an operator or an operand.
 * if it is an operand, we will enqueue it to the queue.
 * if it is an operator, we will check if the stack is empty or not. if it is empty, we will push the operator to the stack.
 * if it is not empty, we will check if the precedence of the operator is greater than the precedence of the operator at the top of the stack.
 * if it is greater, we will push the operator to the stack. else, we will pop the operator from the stack and enqueue it to the queue.
 * after we finish iterating over the input string, we will pop all the operators from the stack and enqueue them to the queue.
 * then we will return the queue.
 *
 */

const Queue = require('./queues/queue.js');
const Stack = require('./stack.js');

/**
 * Retrieves the next lexeme from the input array.
 *
 * @param {Array} lexemes - The array of lexemes.
 * @returns {*} - The next lexeme, or null if the input array is empty.
 */
function getNextLexeme (lexemes) {
  const lexeme = lexeme.shift();
  if (lexeme === undefined) {
    return null;
  }
  return lexeme;
}

function isOperator (char) {
  return ['+', '-', '*', '/', '^'].includes(char);
}

function isParenthesis (char) {
  return ['(', ')'].includes(char);
}

/**
 * Returns the precedence value for the given operator.
 *
 * @param {string} operator - The operator for which to retrieve the precedence value.
 * @returns {number} The precedence value of the operator.
 */
function getPrecedence (operator)  {
  switch (operator) {
    case '+':
    case '-':
      return 1;
    case '*':
    case '/':
      return 2;
    case '^':
      return 3;
    case '(':
    case ')':
      return 4;
    default:
      return 0;
  }
}

/**
 * Shunting-yard algorithm
 * @param input {string
 * @returns {Queue}
 */
function shuntingYard (input) {
  input = input.split('');

  const output = new Queue();
  const operators = new Stack();

  let lexeme = getNextLexeme(input);

  while (lexeme !== null) {
    if (isOperator(lexeme)) {
      while (!operators.isEmpty() && getPrecedence(lexeme) <= getPrecedence(operators.peek())) {
        output.enqueue(operators.pop());
      }

      operators.push(lexeme);
    } else if (lexeme === '(') {
      operators.push(lexeme);
    } else if (lexeme === ')') {
      while (!operators.isEmpty() && operators.peek() !== '(') {
        output.enqueue(operators.pop());
      }

      operators.pop();
    }

    else {
      output.enqueue(parseInt(lexeme));
    }

    lexeme = getNextLexeme(input);
  }

  while (!operators.isEmpty()) {
    output.enqueue(operators.pop());
  }

  return output;
}

// console.log(shuntingYard('3+4*2/(1-5)^2^3'));

module.exports =  {
  shuntingYard,
  isOperator,
}


