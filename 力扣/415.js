/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let long1 = num1.length
  let long2 = num2.length
  let a = []
  for (let i = long1 - 1, j = long2 - 1; i >= 0, j >= 0; i--, j--) {
    if (Number(num1[i]) + Number(num2[j]) >= 10) {
      num1[i - 1] = (Number(num1[i - 1]) + 1) + ""
      a[i] = (Number(num1[i]) + Number(num2[j])) % 10
    } else if (Number(num1[i]) + Number(num2[j]) < 10) { a[i] = Number(num1[i]) + Number(num2[j]) }
  } return a
};

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let long1 = num1.length
  let long2 = num2.length

  let r = ''
  let c = 0

  for (let i = long1 - 1, j = long2 - 1; i >= 0 || j >= 0; i--, j--) {
    let a = Number(num1[i] ?? 0)
    let b = Number(num2[j] ?? 0)
    let s = a + b + c
    r = s % 10 + r
    c = s > 9 ? 1 : 0
  } if (c) {
    return c + r
  } else {
    return r
  }
};
