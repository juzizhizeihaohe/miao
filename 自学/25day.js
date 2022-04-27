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
//先在第一个循环中选定第二个值，记录他的值，进入第二个循环，对比前一项的大小，如果大于他，就用前一项替换他，然后一直遍历直到有一项小于他，停止替换后，把其记录的值赋给小于他的后一项，

function chazhi(array) {
  for (let i = 1; i < array.length; i++) {
    let a = array[i]
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > a) {
        array[j + 1] = array[j]
      } else {
        break
      }
    } array[j + 1] = a
  } return array
}


//插值排序
function chazhi(array) {
  for (var i = 1; i < array.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      var a = array[j]
      if (array[j] > array[i]) {
        array[j] = array[i]
        array[j + 1] = a
      }
    }
  } return array
}
