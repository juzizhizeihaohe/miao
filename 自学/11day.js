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

function fibb(n) {
  if (n < 3) {
    return 1
  } else {
    return fibb(n - 1) + fibb(n - 2)
  }
}


function fx(n) {
  if (n == 0) {
    return
  } let x = Number(prompt())
  fx(n - 1)
  console.log(x)
}
