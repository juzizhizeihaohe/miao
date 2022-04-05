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

function fill(array, val) {
  for (let i = 0; i < array.length; i++) {
    array[i] = val
  } return array
}

function sum(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  } return sum
}
