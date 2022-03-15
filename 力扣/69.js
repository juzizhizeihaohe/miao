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
  let left = 1
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

 


