function mi(a, b) {
  if (b == 0) {
    return 1
  }
  return mi(a, b - 1) * a
}

function jc(x) {
  if (x == 0) {
    return 1
  } else {
    return jc(x - 1) * x
  }
}

 


function fx(n) {
  if (n == 0) {
    return
  } let x = Number(prompt())
  fx(n - 1)
  console.log(x)
}
