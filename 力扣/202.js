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
};//不知道递归的假退出条件，只能用数组记录每一个求到的sum值，用第二个循环遍历有没有第二次出现的sum值，因为这个求值结果本身就是一个循环，他回一直复现，绕圈圈，用这个方式得到退出循环的出口


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
//这里就是要用递归，只要给循环真假两种方式的出口，不陷入死循环，就可以正常的运行递归，关键是要找到真假的条件
