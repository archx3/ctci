function leftPad (arr, size) {
  let i = -1;

  while (++i < size) {
    arr.unshift(0);
  }

  return arr;
}

module.exports = {
  leftPad
}
