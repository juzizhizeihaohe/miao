/**
 * @param {number} num
 * @return {boolean}
 * 根据完全平方数的性质，我们只需要直接判断 num 的平方根 是否为整数即可。
 */

//遍历解法
var isPerfectSquare = function (num) {
  let j = 1
  let sum = 0

  for (let i = 1; sum <= num; i++, j++) {
    sum = i * j
    if (sum == num) {
      return true
    }
  } return false
};

var isPerfectSquare = function (num) {
  let j = 1
  let sum = 0//用一个参数记录两个数的乘积结果

  for (let i = 1; sum <= num; i++, j++) {//同时加上一，遍历所有的乘积
    sum = i * j
    if (sum == num) {//每一次循环都作比较，是否与输入的形参相同，直至找到相等的输出true，或直至遍历结束，返回false
      return true
    }
  } return false
};

//二分法
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0
  let right = num//设置围栏

  while (left <= right) {
    let mid = Math.floor((right - left) / 2) + left
    let square = mid * mid
    if (square < num) {
      left = mid + 1
    } else if (square > num) {
      right = mid - 1
    } else {
      return true
    }
  } return false
};
