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

  if (a.length == 2) {
    if (a != ["(", ")"] || a != ['{', '}'] || a != ['[', ']']) {
      return false
    } return true
  }

  if (a.length % 2 == 1) {
    return false
  }

  if (a[0] == ")" || a[0] == "}" || a[0] == "]") {
    return false
  }

  for (let j = 0; j < a.length; j++) {

    if (a[j] == "(" || a[j] == "[" || a[j] == "{") {
      if (a[j] == "(") {
        if (a[j + 2] == ")") {
          b.push(false)
        } if (a[j - 1] == ")") {
          b.push(false)
        } if (a[j + 1] == ")") {
          b.push(a.includes(")"))
        }
      } if (a[j] == "[") {
        if (a[j + 2] == "]") {
          b.push(false)
        } if (a[j - 1] == "]") {
          b.push(false)
        }
        b.push(a.includes("]"))
      } if (a[j] == "{") {
        if (a[j + 2] == "}") {
          b.push(false)
        } if (a[j - 1] == "}") {
          b.push(false)
        }
        b.push(a.includes("}"))
      }
    }
  } if (b.includes(false)) {
    return false
  }return true
}
//只能判断是不是同时有两个符号存在，不能判定顺序是否正确


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
  for (let j = 0; j < a.length - 1; j++) {
    for (let o = a.length; o <= o; o = o - 2) {
      if (a[j] == "(") {
        if (a[o] == ")") {
          b.push(true)
        } b.push(false)
      } if (a[j] == '{') {
        if (a[o] == '}') {
          b.push(true)
        } b.push(false)
      } if (a[j] == '[') {
        if (a[o] == ']') {
          b.push(true)
        } b.push(false)
      }
    }
  } if (b.includes(false)) {
    return true
  } return true
};

"()"
