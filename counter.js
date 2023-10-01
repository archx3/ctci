/**
 * Creates a counter function that returns the incremented value with each call to the function. The counter function starts at the initial value of the counter. The counter function increments the counter by 1 with each call to the function.
 * @param {Number} n - The initial value of the counter.
 * @returns {Function} - A counter function.
 */

var createCounter = function(n) {
  let count = n - 1;

  return function() {
    return count += 1;
  };
};

let getCount = createCounter(10)
console.log(getCount())
console.log(getCount())
console.log(getCount())
console.log(getCount())
console.log(getCount())
console.log(getCount())
