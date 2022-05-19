var juzizhizeihaohe = {
 

  chunk: function (array, size) {
    let b = []
    let a = []
    for (let i = 0; i < array.length; i = i + size) {
      for (let j = i; j < i + size; j++) {
        a.push(array[j])
        array.shift()
      } b.push(a)
      if (array.length < size) {
        a = array
      }
      b.push(a)
      a = []
    } console.log(b)
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

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i++);
  }, 4000);
} console.log(i)
