/**
 * An expression tree is a tree representation of an expression. Each node in the tree is an operation or a literal value. For example, the expression 2 + 3 is represented by the tree:
 *            +
 *          /  \
 *         2    3
 *       /
 *      -
 *    /  \
 *    4   1
 */

const { shuntingYard } = require('./shunting-yard-algorithm');
const Stack = require('./stack');

/*

shuntingYard(infix) {
  let outputQueue = '';
  let operatorStack = [];

  for(let char of infix.trim()){
    if(char === '('){
      operatorStack.push(char);
    }
    else if(char === ')'){
      while(operatorStack[operatorStack.length - 1] !== '('){
        outputQueue += operatorStack.pop();
      }
      operatorStack.pop();
    }
    else if(this.operators[char]){
      while(operatorStack.length > 0 &&
      this.operators[char] <= this.operators[operatorStack[operatorStack.length - 1]]){
        outputQueue += operatorStack.pop();
      }
      operatorStack.push(char);
    }
    else if(!isNaN(char)){
      outputQueue += char;
    }
  }

  while(operatorStack.length > 0){
    outputQueue += operatorStack.pop();
  }

  return outputQueue;
}

class ExpressionTreeNode {
  constructor(value, type) {
    this.type = type;
    // we need to know the whether an operator is unary or binary
    this.unary = false;
    this.value = value;
    this.left = null;
    this.right = null;
  }

  isOperator() {
    return this.type === 'operator';
  }

  isOperand() {
    return this.type === 'operand';
  }

  isLeftParenthesis() {
    return this.type === 'leftParenthesis';
  }

  isRightParenthesis() {
    return this.type === 'rightParenthesis';
  }

  isParenthesis() {
    return this.isLeftParenthesis() || this.isRightParenthesis();
  }

  isUnary() {
    return this.type === 'unary';
  }
}


class ExpressionTree {
  /!**
   *
   * @param expression string
   *!/
  constructor (expression) {
    this.root = null;
    this.expression = expression;
    this.buildTree();
  }

  buildTree() {
    // we'll be building the tree from an infix expression string

  }

  insert(node) {
    let current = this.root;
    let parent = null;

    while (current !== null) {
      parent = current;

      if (node.isOperator()) {
        if (current.isOperand()) {
          current = current.right;
        } else {
          current = current.left;
        }
      } else {
        if (current.isOperator()) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }

    if (parent.isOperator()) {
      parent.right = node;
    } else {
      parent.left = node;
    }
  }

  getType(char) {
    if (char === '+' || char === '-' || char === '*' || char === '/') {
      return 'operator';
    } else if (char === '(') {
      return 'leftParenthesis';
    } else if (char === ')') {
      return 'rightParenthesis';
    } else {
      return 'operand';
    }
  }

  print() {
    this.printTree(this.root);
  }

  printTree(node) {
    if (node === null) {
      return;
    }

    this.printTree(node.left);
    console.log(node.value);
    this.printTree(node.right);
  }

  evaluate() {
    return this.evaluateTree(this.root);
  }

  evaluateTree(node) {
    if (node === null) {
      return 0;
    }

    console.log({nv : node.value })
    if (node.isOperand()) {
      return parseInt(node.value);
    }

    const left = this.evaluateTree(node.left);
    const right = this.evaluateTree(node.right);

    switch (node.value) {
      case '+':
        return left + right;
      case '-':
        return left - right;
      case '*':
        return left * right;
      default:
        return left / right;
    }
  }

  toString() {
    return this.expression;
  }
}

const expressionTree = new ExpressionTree('2+3*4-5');
console.log(expressionTree.evaluate());
expressionTree.print();
console.log(expressionTree.toString());

console.log(expressionTree.root)
*/

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class ExpressionTree {
  constructor() {
    this.operators = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2
    };
    this.stack = new Stack()
  }



  buildTree(expression) {
    let postfix = shuntingYard(expression);

    for (let char of postfix) {
      if (char in this.operators) {
        let rightNode = this.stack.pop();
        let leftNode = this.stack.pop();
        let node = new Node(char, leftNode, rightNode);

        this.stack.push(node);
      } else if(!isNaN(char)) {
        this.stack.push(new Node(parseInt(char)));
      }
    }

    return this.stack.pop();
  }

  evaluate(node) {
    if (node.left === null && node.right === null) {
      return node.value;
    } else {
      const result1 = this.evaluate(node.left);
      const result2 = this.evaluate(node.right);

      if (node.value === '+') {
        return result1 + result2;
      } else if(node.value === '-') {
        return result1 - result2;
      } else if(node.value === '*') {
        return result1 * result2;
      } else {
        return result1 / result2;
      }
    }
  }

  print(node) {
    if (node === null) {
      return;
    }
    this.print(node.left);
    console.log(node.value);
    this.print(node.right);
  }
}



let expressionTree = new ExpressionTree();
let tree = expressionTree.buildTree('1+2*5-4');
// console.log(JSON.stringify(tree, null, 2));
let result = expressionTree.evaluate(tree);
console.log(`Expression Result: ${result}`);
