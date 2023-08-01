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

  if (x < 100 || x > 100) {
    return 0
  }

  if (n < -2147483648 || n > 2147483647) {
    return 0;
  }

  if (n === 0) { return 1 }

  let result;

  if (n > 0) {
    result = 1;

    for (let i = 1; i <= n; i++) {
      result = result * x;
    }
  }

  if (n < 0) {
    result = 1;

    for (let i = 1; i <= n; i++) {
      result = result / x;
    }
  }

  return result;
}

console.log(pow(2,2))
console.log(pow(2,-2))
