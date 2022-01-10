var juzizhizeihaohe = {
  chunk: function (array, size) {
    let len = array.length
    let res = []
    for (let i = 0; i < len; i += size) {
      let temp = []
      let n = Math.min(i + size, len)
      for (let j = i; j < n; j++) {
        temp.push(array[j])
      }
      res.push(temp)
    }
    return res
  },

  compact: function (array) {
    let res = []
    let len = array.length
    for (let i = 0; i < len; i++) {
      if (array[i]) {
        res.push(array[i])
      }
    }
    return res
  },

  drop: function (array, n = 1) {
    let res = []
    let len = array.length
    for (let i = n; i < len; i++) {
      res.push(array[i])
    }
    return res
  },

  dropright: function (array, n = 1) {
    let res = []
    let len = array.length
    for (let i = 0; i < len - n; i++) {
      res.push(array[i])
    }
    return res
  },

  fill: function (array, filler, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = filler
    }
    return array
  }
}
