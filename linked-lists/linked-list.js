/**
 * A linked list is a linear data structure where each element is a separate object.
 * Each element (we will call it a node) of an object that has two properties: data (value) and next.
 * The last node has a reference to null.
 * The entry point into a linked list is called the head of the list.
 * It should be noted that head is not a separate node, but the reference to the first node.
 * If the list is empty then the head is a null reference.
 *
 * A linked list is a dynamic data structure.
 * The number of nodes in a list is not fixed and can grow and shrink on demand.
 * Any application which has to deal with an unknown number of objects will need to use a linked list.
 *
 * A linked list has the following methods:
 * 1. insert: insert a new node
 * 2. get
 * 3. find or search: find a node with a given value
 * 4. remove: remove a node
 * 5. traverse: visit each node in the list
 * 6. isEmpty: check if the list is empty
 * 7. size: get the number of nodes in the list
 * 8. clear: remove all nodes from the list
 * 9. toString: get a string representation of the list
 *
 * Additionally, we can have the following methods:
 * 1. insertAt: insert a new node at a given position
 * 2. removeAt: remove a node at a given position
 * 3. indexOf: get the position of a node with a given value
 * 4. contains: check if a node with a given value exists in the list
 * 5. getHead: get the head of the list
 * 6. getTail: get the tail of the list
 * 7. reverse: reverse the list
 * 8. forEach: execute a given function on each node in the list
 * 9. map: create a new list by executing a given function on each node in the list
 * 10. reduce: create a value by executing a given function on each node in the list
 * 11. filter: create a new list with nodes that pass a test
 * 12. some: check if at least one node in the list passes a test
 * 13. every: check if all nodes in the list pass a test
 * 14. peekFirst: get the first node in the list
 * 15. peekLast: get the last node in the list
 *
 * @see https://en.wikipedia.org/wiki/Linked_list
 *
 */

const Node = require("../nodes/linked-list-node")

class LinkedList {
  constructor (initialValue) {
    this.head = new Node();
    // this.last = this.head;
    // this.length = 0;

    if (initialValue) {
      this.#insertFirstNode(initialValue);
    }
  }

  // a private method to insert the first node
  #insertFirstNode (value) {
    // const temp = new Node(value);
    this.head.next = new Node(value);
    // this.last = newNode;
  }

  insert (value) {
    if (this.head.next === null) {
      this.#insertFirstNode(value);
      return;
    }

    // create a new node at the end of the list
    const temp = new Node(value);
    let last = this.head;

    while (last.next !== null) {
      last = last.next;
    }

    last.next = temp;
  }

/*  get (index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let node = this.root.next;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    return node;
  }*/

  find (value) {
    let node = this.head;

    while (node.next !== null) {
      if (node.value === value) {
        return node
      }

      node = node.next;
    }

    return null;
  }

  /**
   * Removes the first instance of the given item from the list.
   *
   * @param {any} item - The item to be removed from the list.
   */
  remove (item) {
    let node = this.find(item);

    if (node !== null) {
      // if the node to be removed is the first node
      if (node === this.head) {
        this.head = this.head.next;
      }

      // for any other node including the last node
      let prevNode = this.head;

      while (prevNode.next !== node) {
        prevNode = prevNode.next;
      }

      if (prevNode.next === null) { // it's the last node
        prevNode.next = null;
        node = null;
      } else {
        prevNode.next = node.next;
        node = null // we have to remove the node and free memory
      }
    }

    return this;
  }

  removeFirst () {
    if (this.head.next === null) {
      return null;
    }

    const node = this.head.next;
    this.head.next = node.next;
    node.next = null;

    return node;
  }

  removeLast () {

  }

  isEmpty () {
    return this.head.next === null;
  }

  size () {
    let count = 0;
    let node = this.head;

    while (node.next !== null) {
      count += 1;
      node = node.next;
    }

    return count;
  }

  clear () {
    // this.head.next = null; // we can just do this,
    // but doing this only will remove all nodes, yet they will still be in memory

    // we can also do this to free memory
    let node = this.head;
    while (node.next !== null) {
      const temp = node.next;
      node.next = null;
      node = temp;
    }

    return this;
  }

  toString () {
    let str = "";
    let node = this.head

    for(; node.next !== null; node = node.next) {
      str += `${node.value} -> `;
    }

    str += `${node.value} -> null`;
    return str;
  }

  [Symbol.iterator] () {
    let node = this.head;
    return {
      next () {
        if (node.next === null) {
          return { done: true };
        } else {
          const value = node.next.value;
          node = node.next;
          return { value, done: false };
        }
      }
    }
  }
}

module.exports = LinkedList;

const list = new LinkedList(1);

list.insert(2);
list.insert(3);
list.insert(4);

console.log(list.toString());

list.remove(3);

console.log(list.toString());

// console.log(list.size())

for (const node of list) {
  console.log(node);
}
