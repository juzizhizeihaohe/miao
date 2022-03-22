/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let i = 0
  function a(taijie) {
    if (taijie == n) {
      i++
    } if (taijie > n) {
      return
    }
    a(taijie + 1) ||
      a(taijie + 2)
  } a(0)
  return i
};

//可以这么做但是需要的时间很多，超出了时间限制
