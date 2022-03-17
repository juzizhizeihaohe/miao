/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sc = ""
  let g = x % 10

  if (x < 0) {
    return "-" + reverse(Math.abs(x))
  }

  while (x != 0) {
    g = x % 10
    sc = sc + g
    x = (x - g) / 10
  } if (Number(sc) < Math.pow(-2, 31) || Number(sc) > Math.pow(2, 31) - 1) {
    return 0;
  }
  return sc
};


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let sc = ""//使用字符串作为放置空间

  if (x < 0) {
    return "-" + reverse(Math.abs(x))//如果有负值，就计算x的绝对值，带入函数本身，加上负号返回
  }

  while (x != 0) {
    g = x % 10
    sc = sc + g
    x = (x - g) / 10//循环放入个位值，直到x等于0
  } if (Number(sc) < Math.pow(-2, 31) || Number(sc) > Math.pow(2, 31) - 1) {//根据题目要求，超过这个值的要返回0，把字符串转回数字做对比
    return 0;
  }
  return sc
};
