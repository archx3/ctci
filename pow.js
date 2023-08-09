/*
* Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*
* Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000

Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100

Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/2^2 = 1/4 = 0.25



CONSTRAINTS:
  -100.0 < x < 100.0
  -2^31 <= n <= (2^31)-1

  n is an integer.
  Either x is not zero or n > 0.
 -104 <= xn <= 104

* */


function pow(x, n) {
 if (!x || !n || typeof n !== "number" || typeof x !== "number") {
    return 0;
  }

  n = Math.floor(n);

  if (x < -100 || x > 100) {
    return 0
  }

   if (n < -2147483648 || n > 2147483647) {
    return 0;
  }

   x < 0 && (x = -x);

   if(x === 1) {
    return 1;
   }

  if (n < 1 && n > 0) { return 1 }

  let result = 1;


  const isNegative = n < 0;
  isNegative && (n = -n); // Math.abs(x)
  for (let i = 1; i <= n; i++) {
    result = result * x;
  }

  isNegative && (result = 1 / result);

  return result;
}

// console.log(pow(2,2))
// console.log(pow(2,-2));
// console.log(pow(8,-1));
// console.log(pow(5,-3));

let i = 0;

function powRecursive (x, n) {
  console.log("i", ++i)
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return x;
  }

  if (n < 0) {
    return 1 / powRecursive(x, -n);
  }
  return x * powRecursive(x, n - 1);
}

// console.log(powRecursive(2, 2))
// console.log(powRecursive(2, 3))
console.log(powRecursive(2, 10));

// console.log(powRecursive(2, -2));
// console.log(powRecursive(8, -1));
// console.log(powRecursive(5, -3));

i = 0;

function powRecursiveMemoized (x, n, memo = {}) {
  console.log("i", ++i);
  if (n === 0) {
    return 1
  }

  if (n === 1) {
    return x;
  }

  if (n in memo) {
    return memo[n];
  }

  if (n < 0) {
    memo[n] = 1 / powRecursive(x, -n, memo);
  }
  memo[n] = x * powRecursive(x, n - 1, memo);

  return memo[n];
}

console.log(powRecursiveMemoized(2, 10));
