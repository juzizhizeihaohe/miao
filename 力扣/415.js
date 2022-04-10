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
