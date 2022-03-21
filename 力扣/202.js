/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {

  let a = []

  while (true) {
    let sum = 0
    let ng = 0
    while (n > 0) {
      ng = n % 10
      sum = sum + ng * ng
      n = (n - ng) / 10
    } if (sum == 1) {
      return true
    } else {
      for (let i = 1; i < a.length; i++) {
        if (sum == a[i]) {
          return false
        }
      } a.push(sum)
      n = sum
    }
  }
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let a = []
  while (true) {
    let sum = 0
    while (n > 0) {
      let ng = n % 10
      n = (n - ng) / 10
      sum += ng * ng
    } if (sum == 1) {
      return true
    } else {
      for (let i = 0; i < a.length; i++) {
        if (sum == a[i]) {
          return false
        }
      } a.push(sum)
      n = sum
    }
  }
};


var isHappy = function (n) {
  let sum = 0
  while (n > 0) {
    let ng = n % 10
    sum += ng * ng
    n = (n - ng) / 10
  } if (sum == 1) {
    return true
  } if (sum == 4) {
    return false
  } return isHappy(sum)
}
