var juzizhizeihaohe = {


  chunk: function chunk(array, size = 1) {
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
  },


  compact: function compact(array) {
    let a = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] && array[i] !== 0) {
        a.push(array[i])
      }
    } return a
  },

  difference: function difference(array, values) {
    let b = []
    for (let i = 0; i < values.length; i++) {
      let a = values[i]
      for (let j = 0; j < array.length; j++) {
        if (array[j] == a) {
          array[j] = "no"
        }
      }
    } for (let e = 0; e < array.length; e++) {
      if (array[e] !== "no") {
        b.push(array[e])
      }
    } return b
  },


  drop: function drop(array, n = 1) {
    var ary = []
    if (n == 0) {
      return array
    }
    if (n >= array.length) {
      return []
    }


    for (let i = 0; i < n; i++) {
      ary.push(array[i])
    }

    return difference(array, ary)
  },

  dropRight: function dropRight(array, n = 1) {
    if (n == 0) {
      return array
    }
    if (n >= array.length) {
      return []
    }

    for (let i = 0; i < n; i++) {
      array.pop()
    } return array
  },

  fill: function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value
    } return array
  },

  flatten: function flatten(array) {
    let end = []
    for (let i = 0; i < array.length; i++) {
      if (typeof (array[i]) == 'number') {
        end.push(array[i])
      } if (typeof (array[i]) == 'object') {
        for (let j = 0; j < (array[i]).length; j++){
          end.push((array[i])[j])
        }
      }
    } return end
  }
}
