function countBs(str) {
  let a = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "b") {
      a++
    }
  } return a
}
//寻找字符串里有几个b

function countChar(str, char) {
  let a = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      a++
    }
  } return a
}
//寻找字符串里指定字符又几个

function countBs(srt) {
  return countChar(srt, "b")
}

function min(a, b) {
  if (a < b) {
    return a
  } return b
}

function ja(x) {
  if (x == 1) {
    return "奇"
  } if (x == 0) {
    return "偶"
  } else {
    return ja(x - 2)
  }
}
//每次减去2，判断能不能减到0，能就是偶数，不能就是奇数

function ja(x) {
  if (x == 1) {
    return "奇"
  } else if (x == 0) {
    return "偶"
  } else {
    if (x > 0) {
      return ja(x - 2)
    } if (x < 0) {
      return ja(x + 2)
    }
  }
}
//既可以判断正数，也可以判断负数

function daying(hangshu, fuhao) {
  let k = ""
  let h = ""
  for (let i = 0; i < hangshu; i++) {
    k = k + fuhao
    h = h + k + "\n"
  } console.log(h)
}

