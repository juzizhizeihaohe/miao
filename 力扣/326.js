/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) {
    return false
  } while (n % 3 == 0) {
    n = n / 3
  } return n == 1
}

/**
 * @param {number} n
 * @return {boolean}
 */
 var isPowerOfThree = function (n) {
  if (n < 1) {
    return false
  } while (n % 3 == 0) {//while的判断条件是括号内输出真，才会进入循环
    n = n / 3
  } return n == 1
}
