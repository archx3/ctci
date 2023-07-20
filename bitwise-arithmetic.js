// // division by t
// const num = 10;
//
// // right shift operator (>>) divides by 2
// console.log(num >> 1); // 5
// console.log(num >> 2); // 2,
//
// // left shift operator (<<) multiplies by 2
// console.log(num << 1); // 20 = num * 2 ^ 1
// console.log(num << 2); // 40 = num * 2 ^ 2
//
// // bitwise AND operator (&) checks if both bits are 1
// console.log(5 & 3); // 1 == 101 & 011 = 001
// console.log(5 & 2); // 0 == 101 & 010 = 000
//
// // it can be used to check if a number is even or odd
// console.log(5 & 1); // odd, because 101 & 001 = 001
// console.log(4 & 1); // even, because 100 & 001 = 000
//
// // e.g. check if a number is even
// const isEven = (num) => (num & 1) === 0;
// console.log(isEven(5)); // false
//
// // it can be used to check if a number is a power of 2
// const isPowerOfTwo = (num) => (num & (num - 1)) === 0;
// console.log(isPowerOfTwo(4)); // true
// console.log(isPowerOfTwo(5)); // false


// bitwise OR operator (|)

// can be used to converts a character to lowercase
// const toLowerCase = (char) => String.fromCharCode(char | '');
//
// console.log(toLowerCase("A")); // a

//can be used to add two numbers if there is no carry
console.log(5 | 2); // 7 == 101 | 011 = 111

// if there is a carry, just you have to add the result of the bitwise AND operator to the result of the bitwise OR operator
console.log((5 | 6) + (5 & 6)); // 15 == 101 | 110 + (101 & 110) = 101 | 110 + 100 = 101 | 1000 = 1111
// but that seems a bit too much work, so you can just use the addition operator (+) instead


// bitwise XOR operator (^) checks if both bits are different
console.log(5 ^ 3); // 6 == 101 ^ 011 = 110

/*
* The bitwise XOR operator is the most useful operator from a technical interview perspective.
It is used in many problems.
* A simple example could be “Given a set of numbers where all elements occur an even number of times except one number,
* find the odd occurring number” This problem can be efficiently solved by just doing XOR to all numbers.
* */
