/**
 * A queue is a data structure that follows the First-In-First-Out (FIFO) principle.
 * Elements are added to the back of the queue and removed from the front.
 *
 * The following operations are performed on a queue:
 * - enqueue: add an element to the back of the queue
 * - dequeue: remove an element from the front of the queue
 * - peek: get the element at the front of the queue without removing it
 * - isEmpty: check if the queue is empty
 * - length: get the number of elements in the queue
 * - print: print the elements in the queue
 * - clear: remove all elements from the queue
 *
 * - toString: convert the queue to a string
 *
 * The following are properties we can add later:
 * - toArray: convert the queue to an array
 * - toString: convert the queue to a string
 * - [Symbol.iterator]: iterate over the queue
 * - [Symbol.toStringTag]: get the string tag of the queue
 * - [Symbol.toPrimitive]: convert the queue to a primitive value
 * - [Symbol.isConcatSpreadable]: used to flatten the queue
 * - [Symbol.species]: get the constructor of the queue
 *
 * This implementation uses an array to store the elements in the queue.
 *
 * @see https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 * @class Queue
 */


class Queue {
  constructor () {
    this.queue = [];
    this.length = 0;
  }

  enqueue (item) {
    this.queue.push(item);
    this.length += 1;
  }

  dequeue () {
    this.queue.unshift();
    this.length -= 1;
  }

  peek () {
    return this.queue[0];
  }

  isEmpty () {
    return this.length === 0;
  }

  print () {
    console.log(this.queue);
  }

  clear () {
    this.queue = [];
    this.length = 0;
  }


  toString () {
    return this.queue.toString();
  }
}
