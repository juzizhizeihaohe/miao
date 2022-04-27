//判断一个数组是否是升序
function shengxu(array) {

  for (let i = 1; i < array.length; i++) {
    var min = array[i]
    var max = array[i]
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > max) {
        max = array[j]
      } if (array[j] < min) {
        min = array[j]
      }
    }
  } if (array[0] !== min && array[array.length - 1] !== max) {
    return false
  } return true
}
//只对比最大项和最小项，不全面

function shengxu(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      return false
    }
  } return true
}
//如果有前一项大于后一项就说明排序错误



//冒泡排序
function bubbleSort(array) {
  for (let i = array.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (array[j] > array[j + 1]) {
        let a = array[j]
        array[j] = array[j + 1]
        array[j + 1] = a
      }
    }
  } return array
}

function bubbleSort(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      let a = array[j + 1]
      if (array[j] > array[j + 1]) {
        array[j + 1] = array[j]
        array[j] = a
      }
    }
  } return array
}

//插值排序
function chazhi(array) {
  for (var i = 1; i < array.length; i++) {
    var a = array[i]
    for (var j = i - 1; j >= 0; j--) {
      if (array[j] > array[i]) {
        array[j] = array[i]
        array[j + 1] = a
      }
    }
  } return array
}

//交换数组第i和第j项的值
function swap(array, i, j) {
  let a = array[j]
  array[j] = array[i]
  array[i] = a
  return array
}

//在循环中可能会出现，原数组本身就是有序的升序数组，可以使用标识变量来查看有没有进入循环，如果一次都没有进入循环，就直接返回原数组

function max(array) {
  let max = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  } return max
}
//寻找数组最大值函数

function selectSort(array) {
  for (var i = 0; i < array.length; i++) {
    var min = i
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    } swap(array, i, min)
  } return array
}
//在第一个循环中，把数组的第一项默认为整个数组中最小项，遍历除他之外的所有项目，如果有就替换最小值，然后遍历到结尾，找到整个数组的最小项，结束遍历后，交换位置，重复循环直至结束，



//选择排序
function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) {
        min = j
      }
    } let a = array[i]
    array[i] = array[min]
    array[min] = a
  } return array
}


//归并排序
function mergeSort(array) {
  
}
