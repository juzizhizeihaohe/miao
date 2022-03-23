/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let a = 0
  for (let i = 1; i < n; i++) {
    if (sushu(i)) {
      a++
    }
  } return a
};

var sushu = function (a) {
  if (a < 2) {
    return false
  } else {
    for (let i = 2; i < a; i++) {
      if (a % i == 0) {
        return false
      }
    } return true
  }
};
//速度太慢，超时了，结果和逻辑是正确的

//埃斯托妮筛选法
Array(100)
//这个方式可以创建一个默认100长度，空内容的数组
.fill(true)
//这个语法可以向数组里全部填入true
Array(100).fill(true)
//合起来就是有100个true的数组
//可以知道的是，除了2以外，所有的偶数不是素数，可以排除掉一半的值
