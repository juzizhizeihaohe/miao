/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let b = x
  let a = 0
  let end = 0

  while (x > 0) {
    a = x % 10
    x = (x - a) / 10
    end = end + a + ''
  } if (Number(end) == b) {
    return true
  } return false
}
