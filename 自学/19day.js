var range = function (end, start = 1, step = 1) {

  let a = []
  if (end < start) {
    for (let i = end; i <= start; i += step) {
      a.push(i)
    }
  }
  if (end > start) {
    for (let i = start; i <= end; i += step) {
      a.push(i)
    }
  } return a
}

var sum = function (array) {
  sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  } return sum
}
//创建规定范围内的数组，并规定插值，求和

function reverseArray(array) {
  let a = []
  let b = []
  for (let i = 0; i < array.length; i++) {
    a[array[i]] = array[i]
  } for (let j = 0; j < a.length; j++) {
    if (typeof (a[j]) === "number") {
      b.push(a[j])
    }
  } return b
}
