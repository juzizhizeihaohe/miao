/**
 * @param {number} n
 * @return {number[]}
 */
var erjinzhi = function (n) {
  let b = 0

  while (n > 0) {
    ng = n % 2
    if (ng === 1) {
      b++
    }
    n = (n - ng) / 2
  } return b
}

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let a = []
  for (let i = 0; i <= n; i++) {
    a.push(erjinzhi(i))
  } return a
};

//使用两个函数，第一个判断数字二进制中的的1共有几个，第二个函数将题目所给的数值范围内的数逐一输入进去，并推入数组


 
