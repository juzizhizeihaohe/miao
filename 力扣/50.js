/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let a = x
  if (n < 0) {
    a = 1 / x
    n = -n
    for (let i = 1; i < n; i++) {
      x = x * a
    } return x
  }
  else if (n > 0) {
    for (let i = 1; i < n; i++) {
      x = x * a
    } return x
  }
};
