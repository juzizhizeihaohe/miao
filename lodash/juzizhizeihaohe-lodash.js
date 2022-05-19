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
    } return (b)
  }


 
}
