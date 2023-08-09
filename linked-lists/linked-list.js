const Node = require("../nodes/linked-list-node")

class LinkedList {
  constructor (initialValue) {
    this.root = new Node();
    this.last = this.root;
    this.length = 0;

    if (initialValue) {
      this.root.next = new Node(initialValue);
      this.last = this.root.next;
    }
  }

  insert (value) {
    if (!this.root.next) {
      this.root.next = new Node(value);
      this.last = this.root.next;
    }
    let newNode = new Node(value);
    this.last
  }
}
