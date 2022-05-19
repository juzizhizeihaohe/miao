var juzizhizeihaohe = {


  chunk: function (array, size) {
    let a = array.length//原始数组长度
    let c = a % size//取出所有完整size后的剩余长度
    let b = parseInt(a / size)//数组里能取出几个完整的size
    let d = []
    let e = []

    for (let i = 0, j = 0; j < b;) {
      d.push(array[i])
      if (d.length == size) {
        e.push(d)
        d = []
        j++
      } i++
    }

    if (c != 0) {
      for (let k = a - c; k < a; k++) {
        d.push(array[k])
      } e.push(d)
    }
    return e
  }

}
