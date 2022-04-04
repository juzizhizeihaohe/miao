function pop(array) {
  delete array[array.length - 1]
  array.length -= 1
  return array
}

function slice(array, start, end) {
  let a = []
  for (let i = start; i <= end; i++) {
    a.push(array[i])
  } return a
}
