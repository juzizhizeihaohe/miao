/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let a = []
  let b = []
  for (let i = 0; i <= n; i++) {
    a.push(i.toString(2))
    for (let j = 0; j < a[i].length; j++) {
      let c = 0
      if (a[i].charAt(j) == 1) {
        c++
        b.push(c)
      }
    }
  } return b
}





