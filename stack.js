/**
 * Represents a stack data structure.
 * A stack is a data structure that follows the Last-In-First-Out (LIFO) principle.
 *
 * The following operations are performed on a stack:
 * - push: add an element to the top of the stack
 * - pop: remove an element from the top of the stack
 * - peek: get the element at the top of the stack without removing it
 * - isEmpty: check if the stack is empty
 * - length: get the number of elements in the stack
 * - print: print the elements in the stack
 * - clear: remove all elements from the stack
 * - toString: convert the stack to a string
 * - getAll: get all the elements in the stack
 *
 * The following are properties we can add later:
 * - toArray: convert the stack to an array
 * - toString: convert the stack to a string
 * - [Symbol.iterator]: iterate over the stack
 * - [Symbol.toStringTag]: get the string tag of the stack
 * - [Symbol.toPrimitive]: convert the stack to a primitive value
 * - [Symbol.isConcatSpreadable]: used to flatten the stack
 * - [Symbol.species]: get the constructor of the stack
 *
 * @see https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
 * @class Stack
 */

/*class Node {
  constructor (value) {
    this.value = value;

  }

}*/

class Stack {
  constructor (props) {
    this.stack = []; // TODO - use a linked list instead
  }

  #MAX_SIZE = 10;

  push (item) {
    if (this.stack.length < this.#MAX_SIZE) {
      this.stack.push(item);
    } else {
      throw new Error('Stack overflow');
    }
  }

  pop () {
    return this.stack.pop()
  }

  peek () {
    return this.stack[this.stack.length - 1];
  }

  isEmpty () {
    return this.stack.length === 0;
  }

  length () {
    return this.stack.length;
  }

  print () {
    console.log(this.stack);
  }

  clear () {
    this.stack = [];
  }

  toString () {
    return this.stack.reverse().toString();
  }

  getAll () {
    return this.stack;
  }

  [Symbol.iterator] () {
    const items = this.stack;
    const length = this.stack.length;
    let index = length

    return {
      next () {
        if (index > 0) {
          return { value: items[--index], done: false };
        } else {
          return { done: true };
        }
      }
    }
  }

}

module.exports = Stack;

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

for (let item of stack) {
  console.log(item)
}
