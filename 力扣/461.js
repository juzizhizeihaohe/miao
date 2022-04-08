/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  var z = x ^ y
  return hammingDistance(z)
};
