/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n == 1) {
    return true 
  }
  if (n < 4) {
    return false
  }
  while (n % 4 == 0) {
    n = n / 4
  } return n == 1
};

