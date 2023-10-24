/**
 * A Priority Queue is a special type of data structure in computer science. In a regular queue, the first item that was inserted is the first one to be removed (First-In-First-Out - FIFO). However, in a Priority Queue, each item is assigned a certain priority, and the item with the highest priority is removed before the items with lower priority.
  In a Priority Queue, when elements with equal priority occur, they are served based on their ordering in the queue. However, in other types of priority queues where priority is the same, the queue might follow a different rule like the First-In-First-Out (FIFO) rule.
  Priority Queues are often used in Operating Systems for process scheduling, in network routers for congestion control, and in algorithms like Dijkstra's for shortest path finding and Heap Sort.
  Implementation of a Priority Queue can be done with various underlying structures like an array, a linked list, or a heap. The choice of the structure will impact the performance of its operations like insertion, deletion, and retrieval. For instance, a heap-based implementation allows for efficient high-priority element access and removal, while a list-based implementation could allow for faster insertion while sacrificing quick access to high-priority elements.
  Here's an example of how you might define and use a simple Priority Queue in JavaScript:
 */

/**
 * Represents a priority queue data structure.
 * @class
 */
class PriorityQueue {
  #queue = [];
  #length = 0;


  constructor (items) {
  }

  getLength () {
    return this.#length;
  }

  enqueue (item, priority) {
    if (this.#length === 0) {
      this.#queue.push({item, priority});
      this.#length++;
      return;
    }

    let i = 0;

    while (i < this.#length) {
      if (priority >= this.#queue[i].priority) {
        this.#queue.splice(i, 0, {item, priority});
        break;
      }
      i++
    }
    this.#length++;
  }

  dequeue () {
    let {item} = this.#queue.shift()
    this.#length--;
    return item;
  }

  peek () {
    return this.#queue[0];
  }

  isEmpty () {
    return this.#length === 0;
  }

  clear () {
    this.#queue = [];
    this.#length = 0;
  }

  print () {
    console.log(this.#queue);
  }
}

const pq = new PriorityQueue();

pq.enqueue('A', 1);
pq.enqueue('B', 2); // 3
pq.enqueue('D', 4); // 1
pq.enqueue('C', 3); // 2
pq.enqueue('E', 5); // 0
pq.enqueue('A2', 1); // 4



pq.print();

