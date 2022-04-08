var hammingWeight = function (n) {
  let sum = 0
  let a = n.toString(2) + ''
  for (let i = 0; i < a.length; i++) {
    if (a[i] == 1) {
      sum++
    }
  } return sum
};
