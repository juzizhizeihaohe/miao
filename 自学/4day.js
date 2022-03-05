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
