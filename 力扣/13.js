/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let a = []
  let sum = 0


  for (let i = 0; i < (s.length); i++) {
    a.push(s[i])
  }
  for (let j = 0; j < (s.length); j++) {
    if (a[j] + a[j + 1] == "IV") {
      j += 1
      sum += 4
    } else if (a[j] + a[j + 1] == "IX") {
      j += 1
      sum += 9
    } else if (a[j] + a[j + 1] == "XL") {
      j += 1
      sum += 40
    } else if (a[j] + a[j + 1] == "XC") {
      j += 1
      sum += 90
    } else if (a[j] + a[j + 1] == "CD") {
      j += 1
      sum += 400
    } else if (a[j] + a[j + 1] == "CM") {
      j += 1
      sum += 900
    }
    else if (a[j] == "I") {
      sum++
    } else if (a[j] == "V") {
      sum += 5
    } else if (a[j] == "X") {
      sum += 10
    } else if (a[j] == "L") {
      sum += 50
    } else if (a[j] == "C") {
      sum += 100
    } else if (a[j] == "D") {
      sum += 500
    } else if (a[j] == "M") {
      sum += 1000
    }
  } return sum
};

