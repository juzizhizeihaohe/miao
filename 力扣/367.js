/**
 * @param {number} num
 * @return {boolean}
 * 根据完全平方数的性质，我们只需要直接判断 num 的平方根 是否为整数即可。
 */

 遍历
var isPerfectSquare = function (num) {
  let x = 1
  let y = 1
  while (y <= num) {
    if (y == num) {
      return true
    }
    x = x + 1
    y = x * x
  }
  return false
}
