const LinkedList = require('./linked-list');
import Node from '../nodes/linked-list-node';

/**
 * @class CircularLinkedList
 * @extends LinkedList
 *
 * @classdesc Represents a circular linked list.
 */
class CircularLinkedList extends LinkedList {
  constructor (initialValue) {
    super();
    this.head = new Node();

    if (initialValue) {
      this.#insertFirstNode(initialValue);

    }
  }


}



