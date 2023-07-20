/**
 * Reverse Integer
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (typeof x !== "number") {
    return 0
  }

  const isNegative = x < 0;
  let original = x;
  let reversed = 0;

  isNegative && (x = -x); // Math.abs(x)
  while (x > 0) {
    reversed = (x % 10) + (reversed * 10);
    x = Math.floor(x / 10)
  }

  original % 10 === 0 && (reversed =  reversed * 10);
  reversed = !isNegative ? reversed : -reversed;

  if (reversed < -2147483648 || reversed > 2147483647) {
    return 0;
  }

  return reversed
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))
