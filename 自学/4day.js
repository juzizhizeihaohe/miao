//与7有关的数
function mo7(x) {
  if (x % 7 == 0 || x % 10 == 7 || (x % 100) - (x % 10) == 70 || (x % 1000) - (x % 100) - (x % 10) == 700 || (x % 10000) - (x % 1000) - (x % 100) - (x % 10) == 7000) {
    return true
  } else {
    return false
  }
}

//数字反转
function fanzhuan(x) {
  let ge = x % 10
  let shi = ((x - ge) % 100)
  let bai = (x - ge - shi)

  if (x >= 0 && x < 10) {
    return x
  } else if (x >= 10 && x <= 99) {
    return ge + "" + shi / 10 + ""
  } else if (x >= 100 && x <= 999) {
    return ge + "" + shi / 10 + "" + bai / 100 + ""
  }
}

//斐波那契数列第n项
function fbnq(n) {
  let a = 1
  let b = 1
  let c = 0

  for (let i = 0; i < n - 1; i++) {
    c = a + b
    a = b
    b = c
  } return a
}

//判断数字有几位  
debugger;
function pd(x) {//123
  位数计次 = 0

  while (x != 0) {
    x = x - (x % 10)
    x = x / 10
    位数计次++
  } return (位数计次)
}
//判断过水仙花数后，判断是否为水仙花数
function sxh(x) {
  let sum = 0
  let ge = 0
  let a = x

  for (let i = 0; i < pd(x); i++) {
    ge = a % 10
    sum += ge ** pd(x)
    a = (a - ge) / 10
  } if (sum == x) {
    return true
  } else {
    return false
  }
}

