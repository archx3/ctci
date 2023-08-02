function factorial(n) {
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return 1
  }

  return n * factorial(n - 1);
}


// console.log(factorial(0));
// console.log(factorial(1));
//
// console.log(factorial(5));


function memoizedFactorial(n, memo = {}) {
  if (n < 1) {
    return 1
  }

  if (n === 1) {
    return 1
  }

  if (memo[n] === undefined) {
    memo[n] = memoizedFactorial(n - 1, memo)
    return memo[n];
  }

  return memo[n];
}

console.log(memoizedFactorial(0));
console.log(memoizedFactorial(1));

console.log(memoizedFactorial(5));
