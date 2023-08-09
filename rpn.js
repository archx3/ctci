/**
 * Reverse Polish Notation (RPN) calculator.
 *
 * Given an expression string, return the result of the expression.
 * First convert the expression to Reverse Polish Notation (RPN) using the shunting-yard algorithm.
 * Then evaluate the RPN expression using a stack.
 *
 * @param {string} expression
 */
const { shuntingYard, isOperator } = require("./shunting-yard-algorithm");
const Stack = require("./stack");

function evaluate (operator, operand1, operand2) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return Math.floor(operand1 / operand2);
    case '^':
      return Math.pow(operand1, operand2);
    default:
      return 0;
  }
}

function rpn (expression) {
  const queue = shuntingYard(expression);
  console.log(queue)

  const stack = new Stack();

  while (!queue.isEmpty()) {
    const lexeme = queue.dequeue();

    console.log(lexeme)
    if (isOperator(lexeme)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = evaluate(lexeme, operand1, operand2);
      stack.push(result);
    } else {
      stack.push(lexeme);
    }
  }

  return stack.pop();
}

console.log(rpn('3+4'));

