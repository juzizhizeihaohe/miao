function b10(n) {
  if (n > 10) {
    return true
  } else {
    return false
  }
}


function bj(m) {
  return function (n) {
    if (n > m) {
      return true
    } else {
      return false
    }
  }
}

