const assert = require("node:assert");

function simplerSqrt(x) {
  return Math.sqrt(x);
}

function bruteForceSqrt(x) {
  let i = 0;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
}

function simpleSqrt(x) {
  return (x ** (1/2)) | 0;
}

function newtonSqrt(x) {
  let r = x;
  while (r * r > x) {
    r = Math.floor((r + x / r) / 2);
  }
  return r;
}

function binarySqrt(x) {
  if (x === 0) {
    return 0;
  }

  let left = 1;
  let right = x;

  while (true) {
    let mid = Math.floor(left + (right - left) / 2);

    if (mid > x / mid) {
      right = mid - 1;
    } else {
      if (mid + 1 > x / (mid + 1)) {
        return mid;
      }
      left = mid + 1;
    }
  }
}

function cheatingDeveloperSqrt(x) {
  let L = 1;
  let R = x;

  while (L < R) {
    let M = Math.floor((L + R) / 2);
    let MSquared = M * M;

    if (MSquared === x) {
      return M;
    }

    if (MSquared < x) {
      L = M + 1;
    } else {
      R = M - 1
    }
  }

  return R;
}

let sqrt;
// sqrt = simplerSqrt
// sqrt = cheatingDeveloperSqrt
// sqrt = binarySqrt
// sqrt = newtonSqrt
// sqrt = bruteForceSqrt
sqrt = simpleSqrt

console.log(sqrt(5));
console.log(sqrt(25));
console.log(sqrt(16));
console.log(sqrt(8));
console.log(sqrt(4));
