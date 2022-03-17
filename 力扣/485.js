/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0//只记录最大值，其他的干扰项不记录
  let a = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      a++
      if (a > max) {
        max = a
      }
    } else {
      a = 0//如果有i不等于1就直接把计数器a重置，继续计算最多次的重复值
    }
  } return max
}


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0

  let a = 0

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] == 1) {
      a++
      if (a > max) {
        max = a//等号前后的顺序很重要，前一个是目标值，后一个是要赋的给他的值，不能前后颠倒
      }
    } else {
      a = 0
    }
  } return max
};
