/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let long = digits.length
  digits[long - 1]++


  for (let i = long - 1; i > 0; i--) {
    if (digits[i] == 10) {
      digits[i] = 0
      digits[i - 1]++
    } else {
      return digits
    }

  } if (digits[0] == 10) {
    digits[0] = 0
    digits.unshift(1)
  } return digits
};

var plusOne = function (digits) {
  let long = digits.length
  digits[long - 1]++ //直接在原数组修改，给数组的最后一位加一
//注意会出现最后一位是9的情况，加上1不可以是[10],要变成[1,0]
  for (let i = long - 1; i > 0; i--) {//从最后一位开始遍历
    if (digits[i] == 10) {//如果有数组中的数是10他就需要进位
      digits[i] = 0//他本身要被赋值为0
      digits[i - 1]++//前一位要加上1
    } else {
      return digits//循环结束就返回 ，但是还有可能数组最高位的数组也是10
    }

  } if (digits[0] == 10) {//所以如果如果0位是10
    digits[0] = 0//他本身就要被赋值位0
    digits.unshift(1)//然后在数组头部推入1
  } return digits//返回数组
};
