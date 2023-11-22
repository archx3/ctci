const Node = require('../nodes/binary-tree-node');

class BinarySearchTree {
  /**
   * Constructs a new object of the class.
   *
   * @param {any[]} args - The arguments to be passed to the constructor.
   */
  constructor (args) {
    if (args) {
      this.root = new Node(args[0]);
      args.slice(1).forEach(arg => this.insert(arg));
    } else {
      this.root = null;
    }
  }

  height(root = this.root) {
    if (root === null) {
      return 0;
    }
    return Math.max(this.height(root.left), this.height(root.right)) + 1;
  }

  getCol (h) {
    if (h === 1) {
      return 1;
    }
    return this.getCol(h - 1) + this.getCol(h - 1) + 1;
  }

  insert (data) {
    const node = new Node(data);

    if (this.root === null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent = null;

      while (true) {
        parent = current;

        if (data < current.data) {
          current = current.left;

          if (current === null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;

          if (current === null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }

  traverse (root = this.root) {
    if (root === null) {
      return;
    }

    this.traverse(root.left);
    console.log(root.data);
    this.traverse(root.right);
  }


  print () {
    // let's print this tree in visual form in the console



  }

  printTree3(node = this.root, prefix = '', isTail = true) {
    if (node) {
      console.log(prefix + (isTail ? '└── ' : '├── ') + node.data);

      let childPrefix = prefix + (isTail ? '    ' : '│   ');

      if(node.right) {
        this.printTree(node.right, childPrefix, false);
      }
      if(node.left) {
        this.printTree(node.left, childPrefix, true);
      }
    }
  }

  printTree2(node = this.root, prefix = '', isLeft = true) {
    if (node) {
      console.log(prefix + (isLeft ? '\\ ' : '/ ') + node.data);
      const newPrefix = prefix + '  ';
      this.printTree(node.left, newPrefix, true);
      this.printTree(node.right, newPrefix, false);
    }
  }

  printTree (M, root, col, row, height) {
    if (root === null) {
      return;
    }
    M[row][col] = root.data;
    this.printTree(M, root.left, col - Math.pow(2, height - 2), row + 1, height - 1);
    this.printTree(M, root.right, col + Math.pow(2, height - 2), row + 1, height - 1);
  }

  treePrinter() {
    const h = this.height(this.root);
    const col = this.getCol(h);
    const M = new Array(h).fill().map(() => new Array(col).fill(0));
    this.printTree(M, this.root, Math.floor(col / 2), 0, h);

    for (let i = 0; i < M.length; i++) { let row="";
      for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] === 0) {
          row = row +" ";
        } else {
          row= row +M[i][j] + " ";
        }
      }
      console.log(row);
    }
  }
}

// module.exports = BinarySearchTree;
// const bst = new BinarySearchTree();

// bst.insert(5);
// bst.insert(3);
// bst.insert(7);
// bst.insert(2);
// bst.insert(4);
// bst.insert(6);

const bst = new BinarySearchTree([5, 3, 7, 2, 4, 6, 1]);

bst.traverse();

// console.log(bst.root)
bst.treePrinter();

