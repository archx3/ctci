/*
* Given a positive (or 0) number, return a string of 1's and 0's representing it's binary value:
* */

function toBinary (n) {
  let sequence = []
  while (n > 0) {
    sequence.push(n % 2);
    n = Math.floor(n / 2);
  }

  return sequence;
}

console.log(toBinary(0));
console.log(toBinary(1));
console.log(toBinary(2));
console.log(toBinary(3));
console.log(toBinary(4));
console.log(toBinary(5));

