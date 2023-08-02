/**
 * Write a function that returns the nth number in the Fibonacci sequence.
 * @param n
 */
const { creatArray } = require("./array");

function fibonacci (n) {
  console.log("i", ++i)
  if (n === 0 || n === 1) {
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(8));
fibonacci(8);

function memoizedFibonacci (n, memo = {}) {
  if (n === 0 || n === 1) {
    return n
  }

  if (memo[n] === undefined) {
    memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  }

  return memo[n];
}


// console.log(memoizedFibonacci(0));
// console.log(memoizedFibonacci(1));
// console.log(memoizedFibonacci(2));
// console.log(memoizedFibonacci(8));
// memoizedFibonacci(8);

function memoizedFibonacciWithArray (n, memo = creatArray(n + 1, 0)) {

  if (n === 0 || n === 1) {
    return n
  }

  if (memo[n] === 0) {
    memo[n] = memoizedFibonacciWithArray(n - 1, memo) + memoizedFibonacciWithArray(n - 2, memo);
  }

  return memo[n];
}

console.log(memoizedFibonacciWithArray(8));
