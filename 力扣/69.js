/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let min = 0
  let max = x

  for (let i = 1; i < x; i++){
    if (i * i == x) {
      return i
    }//排除整数的可能
    
  }
};
