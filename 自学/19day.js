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
//映射排序的乱序数组，使用了额外的空间

function reverseArray(array) {
  let a = Array(array.length)
  for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
    a[j] = array[i]
  } return a
}
//直接向空数组中推入有序数组的倒叙数组

function reverseArray(array) {
  let long = array.length
  let half = Math.floor(array.length / 2)
  for (let j = 0, i = long - 1; j < half; i--, j++) {
    let a = array[j]
    let b = array[i]
    array[i] = a
    array[j] = b
  } return array
}
//循环的遍历限制只需要整个数组的一半，如果是偶数就是两两的对应调换，如果是奇数，中间的数组则不需要移动，用两个对象保存要交换的数字，然后交换

function reverseArray(array) {
  let a = array.length
  let j = 0
  let i = a - 1

  while (j < i) {
    let b = array[i]
    let c = array[j]

    array[j] = b
    array[i] = c

    j++
    i--
  } return array
}
//先确定双指针的初始位置，在给循环执行的条件，记录原始数据后，交换位置，移动指针后循环至条件为falsh（就地修改）

//一个数组中有很多空项，没用内容，应该被称为稀疏数组(sparsed array)
let a = []
a[1] = 3
a[19] = 4
a == [空白, 3, 空属性 * 17, 4]

//如果给稀疏数组求反，她的空白项也会被求反，就像正常数组一样

