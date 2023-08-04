/*
 Given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
  For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
  Given A = [1, 2, 3], the function should return 4.
  Given A = [−1, −3], the function should return 1.
  Write an efficient algorithm for the following assumptions:
  N is an integer within the range [1..100,000];
  each element of array A is an integer within the range [−1,000,000..1,000,000].

* */

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let sorted = A.sort((a, b) => a - b);
  const SIZE = sorted.length;

  for (let i = 1; i < SIZE; i++) {
    if ((sorted[i] - sorted[i -1]) > 1) {
      return sorted[i-1] +  1;
    }
  }

  return sorted[SIZE - 1 ] +  1
}

// console.log(solution([1, 3, 6, 4, 1, 2]));
// console.log(solution([1, 2, 3]));

// let's try a different approach using a hash table
// this solution is O(n) in time complexity and O(n) in space complexity
// even though it uses a hash table, it's still O(n) in space complexity because the hash table in the worst case, we'll go through all the elements in the array.
// Also note that, when there are collisions in the hash table jey hashes, the lookup is no more necessarily O(1).
//
function solution2(A) {
  let hashTable = {};
  const SIZE = A.length;

  for (let i = 0; i < SIZE; i++) {
    hashTable[A[i]] = true;
  }

  let i = 1;
  while (i < 1000000) {
    if (!hashTable[i]) {
      return i;
    }
    i++;
  }

  return 1;
}


console.log(solution2([1, 3, 6, 4, 1, 2]));
console.log(solution2([1, 2, 3]));

// let's try a different approach using a set

