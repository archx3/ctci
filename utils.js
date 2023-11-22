function leftPad (arr, size, value = 0) {
  let i = -1;

  while (++i < size) {
    arr.unshift(value);
  }

  return arr;
}

function rightPad (arr, size, value = 0) {
  let i = -1;

  while (++i < size) {
    arr.push(value);
  }

  return arr;
}

module.exports = {
  leftPad,
  rightPad
}
