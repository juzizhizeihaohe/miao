/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let a = []
  let b = []
  for (let i = 0; i < s.length; i++) {
    a.push(s[i])
  }
  for (let j = 0; j < a.length; j++) {
    if (a[j] == "(") {
      b.push(a.includes(")"))
    } if (a[j] == "[") {
      b.push(a.includes("]"))
    } if (a[j] == "{") {
      b.push(a.includes("}"))
    }
  } if (b.includes(false)) {
    return false
  } return true
}
 
//只能判断是不是同时有两个符号存在，不能判定顺序是否正确

