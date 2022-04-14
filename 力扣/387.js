var firstUniqChar = function (s) {
  let a = []
  let q = 0

  for (let b of s) {
    a.push(b)
  }
  let f = Array(a.length).fill(0)
  for (let c = 0; c < a.length; c++) {
    let d = a[c]

    for (let e = c + 1; e < a.length; e++) {
      if (d == a[e]) {
        f[c]++
      }
    } for (let s of f) {
      if (s == 0) {
        return q
      }
      q++
    }  
  }
};
