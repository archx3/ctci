// const lookup = {
//   foo: 1,
//   bar: 2,
//   baz: 3,
//   qux: 4,
// };
//
// function foo (key) {
//   // NB: this is a contrived example
//   //  IRL, you'd want to check
//   //  if the key exists first
//   return lookup[key];
// }
//
// // driver code


let x = 10
let y = 20
let z = 30
// combine separate if statements into a single if/else if/else chain

// bad
// function foo (x) {
//   if (x < 0) {
//     return 'negative';
//   }
//   if (x === 0) {
//     return 'zero';
//   }
//   return 'positive';
// }

// // good
// function foo (x) {
//
// }
// function g (x) {return x + 1;}
//
//
// function foo (x) {
//   if (x) {
//     g(1);
//   }
//
//   if (x) {
//     g(2);
//   }
// }


// UNSWITCHING

// for (let i = 0; i < len; i++) {
//   if (x) {
//     a[i] = 1;
//   } else {
//     b[i] = 0;
//   }
// }
//
// if (x) {
//   for (let i = 0; i < len; i++) {
//     a[i] = 1;
//   }
// } else {
//   for (let i = 0; i < len; i++) {
//     b[i] = 0;
//   }
// }


// const a = [
//   1, 2, 3, 4, 5,
//   6, 7, 8, 9, 10
// ];
//
// const b = [
//   10, 20, 30, 40, 50,
//   60, 70, 80, 90, 100
// ];
//
// const SIZE = a.length;
//
// function f () {
//   let i1, i2, i3;
//
//   for (i = 0; i1 < SIZE; i1++) {
//     a[i] = b[i];
//   }
// }
//
//
// foo('foo');

// Loop invariant hoisting

function foo (x, y) {
  let a = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10
  ];
  const SIZE = a.length;

  for (let i = 0; i < SIZE; i++) {
    a[i] = x + y;
  }

  return a;
}

function bar (x, y) {
  let a = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10
  ];
  const SIZE = a.length;

  const T = x + y;
  for (let i = 0; i < SIZE; i++) {
    a[i] = T;
  }

  return a;
}







foo('foo');
bar('bar');
