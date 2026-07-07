function logBase2 (x) {
  let res = 0;
  while (x >>= 1) {
    res++;
  }
  return res;

}

console.log(logBase2(4))
console.log(logBase2(16))
