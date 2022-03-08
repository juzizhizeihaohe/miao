//带入rgb颜色的函数
function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")"
}

//或者使用${}模板字符串，使用的是反引号`包裹起来的`

for (let x = 1; x < 100; x++) {
  for (let y = 1; y < 100; y++) {
    var color = `rgb(${x}, ${y},255)`
  }
} console.log(rgb)


//接参的默认值
function f(x, y) {//这里y不输入就会返回默认值2
  if (y === undefined) {
    y = 2
  }
  let a = 1
  for (let i = 1; i <= y; i++) {
    a *= x
  } return a
}

function f(x, y) {
  y = y || 2//或或运算符返回第一个为真的参数，如果n为0，null，undefined也会返回2的默认值，有问题所以这里引入（？？计算符)
  let a = 1
  for (let i = 1; i <= y; i++) {
    a *= x
  } return a
}

function f(x, y) {
  y = y ?? 2 //除非是空值（null，undefined），返回2，只要给来的y值有意义就返回y
  let a = 1
  for (let i = 1; i <= y; i++) {
    a *= x
  } return a
}

function f(x, y = 2) {//不输入或无意义就直接返回形参里的y = 2，提前给默认参数
  let a = 1
  for (let i = 1; i <= y; i++) {
    a *= x
  } return a
}

//在控制台输入代码的时候，如果提示显示
f(?a, b,?c)
f()
//带问号的值就是有默认参数的值可以不填写，没有问号的形参就是需要赋值的，不然会返回NaN

//数组
var a = [1, 2, 3, 4, 5]//第一位是0位
a[4]
5

a.length//length语法取出数组的长度
a = 5

a.push(2)//push语法将括号内的内容从后部推入数组，可以一次推入多个，用逗号分隔
a.push(1, 2, 3, 4, 5,)


a.pop()//pop语法将数组的最后一个值取出，可以直接用于赋值，只能取一个
b = a.pop()

a.unshift(2, 3, 4)//unshift语法将括号内的内容从前部挤入数组,按顺序

a.unshift()//取出第一个数字，可以直接用于赋值，只能取一个

a[a[2]]//可以嵌套

a[1, 2, [a, b, c], 3]//可以数组套数组
a[2] = [a, b, c]
a[2][2] = c
