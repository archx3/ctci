/**
 *
 * @param {Number} size
 * @param {*} [fillWith]
 * @returns {any[]|unknown[]}
 */
function creatArray (size, fillWith) {
  if (fillWith !== undefined) {
    return Array.from({ length: size }, () => fillWith);
  }

  return Array.from({ length: size });
}

module.exports = {
  creatArray,
}
