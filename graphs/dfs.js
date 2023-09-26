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
