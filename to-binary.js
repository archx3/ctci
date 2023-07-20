function toBinaryString (n) {
  return n.toString(2)
}

function toBinary(n) {
  let digits = [];
  while (n > 0) {
    digits.unshift(n % 2);
    // n = Math.floor(n / 2); // n >> 1
    n = n >> 1; // n >> 1
  }

  return digits;
}

console.log(toBinaryString(5))
console.log(toBinary(5))
