/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  if (num == 1) {
    return I
  } if (num == 5) {
    return V
  } if (num == 10) {
    return X
  } if (num == 50) {
    return L
  } if (num == 100) {
    return C
  } if (num == 500) {
    return D
  } if (num == 1000) {
    return M
  }
};
