/**
 * Depth First Search (DFS) is a graph traversal algorithm where you start at a source vertex and traverse as far as you can down the graph branch you are at before backtracking.
 */

function depthFirstTraverse (array) {
  const SIZE = array.length;
  let i = 0

  while (i < SIZE) {
    if (Array.isArray(array[i])) {
      depthFirstTraverse(array[i]);
    } else {
      console.log(array[i]);
    }

    i++;
  }
}

function iterDepthFirstTraverse(array) {
  const stack = [array];

  console.log(stack)

  while (stack.length !== 0) {
    let curr = stack.pop();

    if (Array.isArray(curr)) {
      for (let i = curr.length - 1; i >= 0 ; i--) {
        stack.push(curr[i])
      }
    } else {
      console.log(curr);
    }
  }
}

function depthFirstSearch (array, value) {
  const SIZE = array.length;
  let i = 0;

  while (i < SIZE) {
    const node = array[i];
    if (Array.isArray(node)) {
      depthFirstSearch(node, value)
    } else if (value === node) {
      return node
    }else {
      console.log(array[i]);
    }

    i++;
  }

  return "null";
}

const nestedArray = [
  1, 2, 3,
  [4, 5, 6],
  [
    7, 8,
    [9, 10, 11],
    12
  ],
  [13, 14, 15],
  16, 17,
  [18, 19],
  20
]

// depthFirstTraverse(nestedArray)

// depthFirstSearch(nestedArray, 90)

iterDepthFirstTraverse(nestedArray)
