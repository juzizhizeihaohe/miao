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





