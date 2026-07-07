// to do depth-first search on a graph, we need to keep track of which nodes we've visited
// and which ones we haven't.
// we can't use a stack because we need to visit the nodes in the order they were added to the graph

const oGraph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
};

function depthFirstPrint (graph, root) {
  const stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    console.log(current);

    for (let neighbour of graph[current]) {
      stack.push(neighbour)
    }
  }
}

depthFirstPrint(oGraph, 'a');

function depthFirstPrintArray (array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      depthFirstPrintArray(array[i]);
    } else {
      console.log(array[i]);
    }
  }
}

const array = [
  1,
  2,
  3,
  [
    4,
    5,
    6
  ],
  [
    7,
    8,
    [
      9,
      10,
      11
    ],
    12
  ],
  [
    13,
    14,
    15
  ]
];

// depthFirstPrintArray(array);

function isPojo (pojo) {
  return typeof pojo === 'object' && !Array.isArray(pojo);
}

function depthFirstPrintPojos (pojo) {
  for (let key in pojo) {
    if (isPojo(pojo[key])) {
      depthFirstPrintPojos(pojo[key]);
    } else {
      console.log(pojo[key]);
    }
  }
}

const pojo = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    d1: 4,
    d2: 5,
    d3: 6
},
  e: {
    e1: 7,
    e2: 8,
    e3: {
      e31: 9,
      e32: 10,
      e33: 11
    },
    e4: 12
  },
};

depthFirstPrintPojos(pojo);
