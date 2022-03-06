//调用栈
function pd(x) {
  位数计次 = 0

  while (x != 0) {
    x = x - (x % 10)
    x = x / 10
    位数计次++
  } return (位数计次)
}


//判断过水仙花数后，判断是否为水仙花数
function sxh(x) {
  let sum = 0
  let ge = 0
  let a = x

  for (let i = 0; i < pd(x)/*1*/; i++) {
    ge = a % 10
    sum += ge ** pd(x)/*2*/
    a = (a - ge) / 10
  } if (sum == x) {
    return true
  } else {
    return false
  }
}

//1.此处的计次函数pd（x）调用：sxh（x）函数需要等待其运算结束，返回值才能继续，他们两个函数遵循先进后出的规律，如果有多个函数调用，就像薯片桶里的薯片一样，想取出最开始放入的薯片就要把之后放入的先取出来，后面调用的函数先返回结果给调用它的函数，然后他才能继续运行

//2.此处的重复调用，会影响程序运行的速度，重复调用同一个函数，优化的方式应该是吧函数赋给一个值，调用那个值参与计算
function sxh(x) {
  let sum = 0
  let ge = 0
  let a = x
  let b = pd(x)

  for (let i = 0; i < b; i++) {
    ge = a % 10
    sum += ge ** b 
    a = (a - ge) / 10
  } if (sum == x) {
    return true
  } else {
    return false
  }
}
