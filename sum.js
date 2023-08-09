/**
 *
 * @param values {Array<number>}
 * @returns {*}
 */
function sum (values) {
  if (values.length > 0) {
    return values.reduce(function (acc, curr) {
      return acc + curr
    }, 0)
  }
}

function sumWithFor (values) {
  let sum = 0;
  for (let i = 0, len = values.length; i < len; i++) {
    sum += values[i];
  }
  return sum;
}

module.exports = sum
