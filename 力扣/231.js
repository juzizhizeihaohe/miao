/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 1) {
    return false
  }
  while (n % 2 == 0) {
    n = n / 2
  } return n == 1 // == 是做比较，= 是赋值！
};
