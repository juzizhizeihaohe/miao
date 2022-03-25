
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let a = m - 1
  let b = n - 1
  let c = a + b
  let d = c * (c - 1) / 2
  return d
};
