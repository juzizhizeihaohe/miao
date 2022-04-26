function paixu(array) {

  for (let i = 0; i < array.length; i += 2) {
    if (array[i] > array[i + 1]) {
      let b = array[i]
      array[i] = array[i + 1]
      array[i + 1] = b
    }
  } for (let i = 1; i < array.length; i += 2) {
    if (array[i] > array[i + 1]) {
      let b = array[i]
      array[i] = array[i + 1]
      array[i + 1] = b
    }
  }
  return array
}
//生成随机数组
function randomAry(n) {
  let array = []
  for (let i = 0; i < n; i++) {
    array.push(parseInt(Math.random() * n))
  } return array
}
//插值排列
function paixu(array) {
  for (let i = 1; i < array.length; i++) {
    let t = array[i]
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > t) {
        array[j + 1] = array[j]
      } else {
        break
      }
    } array[j + 1] = t
  } return array
}
