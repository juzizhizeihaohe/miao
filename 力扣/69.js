/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let min = 0
  let max = x
  let a = 0
  // for (let i = 1; i < x; i++){
  //   if (i * i == x) {
  //     return i
  //   }//排除整数的可能

  // }
  while (a * a != x) {
    let b = a / 2
    if (b * b > x) {

    }
  }
};

//二分法
/*
* @param {number} x
* @return {number}
*/
var mySqrt = function (x) {
  let left = 0
  let right = x
  while (left <= right) {
    let min = Math.floor((right - left) / 2) + left
    let spend = min * min
    if (spend <= x) {
      left = min + 1
    } else {
      right = min - 1
    }
  } return right
}

 
var mySqrt = function (x) {
  let left = 1
  let right = x
//设置左右围栏，限定计算的范围
  while (left <= right) {//左围栏只能小于等于右围栏，才能进循环
    let min = Math.floor((right - left) / 2) + left
    //取围栏框选范围内的中间值，只保留整数
    let spend = min * min
    //计算中间值的平方
    if (spend <= x) {//如果中间值平方小于等于x就缩小右围栏的距离
      left = min + 1
    } else {//如果大于就缩小左边的围栏距离
      right = min - 1
    }
  } return right
}

