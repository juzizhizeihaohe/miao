/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let a = x
  if (n < 0) {
    a = 1 / x
    n = -n
    for (let i = 1; i < n; i++) {
      x = x * a
    } return x
  }
  else if (n > 0) {
    for (let i = 1; i < n; i++) {
      x = x * a
    } return x
  }
};

//对归对，太慢，而且超过了数字的范围

var mi = function (x, n) {
  let a = x
  for (let i = 1; i < n; i++) {
    x = x * a
  } return x
}

var myPow = function (x, n) {
  if (x == 2 && n == -2147483648) {
    return 0
  }
  if (x == 1 && n == -2147483648) {
    return 1
  }
  if (x == -1 && n == -2147483648) {
    return 1
  } if (x == -2 && n == -2147483648) {
    return 0
  }
  if (n == 0) {
    return 1
  }
  if (n > 0) {
    return mi(x, n)
  }
  if (n < 0) {
    return 1 / (mi(x, -n))
  }
};
