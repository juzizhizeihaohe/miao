//  骑车问题
var long = Number(prompt("距离"))

var bilk = 27 + 23 + (long / 3)
var walk = long / 1.2

if (walk < bilk) {
  console.log("walk")
}
if (walk > bilk) {
  console.log("bilk")
} else {
  console.log("all")
}

// 分段函数
var x = Number(prompt("x"))

if (0 <= x && x < 5) {
  y = 2 + 2.5
} else if (5 <= x && x < 10) {
  y = 2 - 1.5 * (x - 3) * (x - 3)
} else if (x <= 10 && x < 20) {
  y = x / 2 - 1.5
}
console.log(y)

// //邮寄问题 (1)
// var weight = Number(prompt("重量"))
// var z = prompt("是否加急")
// var fees = 0

// if (weight <= 1000) {
//   fees += 8
// }else if (weight > 1000) {
//   let overflow = weight - 1000
//   weight 
//   if (overflow <= 500) {
//     overflow = 500
//     fees += 4
//   }
//   if (overflow > 500 && overflow <= 1000) {
//     overflow = 1000
//     fees += 8
//   }
//   fees += 8
// }

// if (z == "y") {
//   fees +=5
// }
// console.log(fees)
// //有问题，面对输出编程，局限

//邮寄问题 (2)
debugger
var weight = Number(prompt("重量"))
var z = prompt("是否加急")
var fees = 0

if (weight <= 1000) {
  fees += 8
}
if (weight > 1000) {
  // fees += 8 可以优化直接在最后赋值给fees
  let overflow = (weight - 1000) / 500
  fees += Math.ceil(overflow) * 4 + 8
}
if (z == "y") {
  fees += 5
}
console.log(fees)

// let overflow = (weight - 1000) / 500
// 不足500的，向上取整记为500
//根据实际的逻辑来编程，先选择分开计算不超重的重量，在计算超重的重量，最后计算是否加急。

//选择最大值
var a = Number(prompt("a"))
var b = Number(prompt("b"))
var c = Number(prompt("c"))

var max = 0

if (a => 0) {
  max = a
  if (b > max) {
    max = b
  } if (c > max) {
    max = c
  }
}
console.log(max)
//找最大值就直接设一个最大值，遍历所有的参数，替换现有的最大值，最后输出的就是整个参数中的最大值


//循环
//猜大小
var number = Math.round(Math.random() * 100)
//生成随机数
do {
  var x = Number(prompt("x"))
  if (x > number) {
    alert("大了")
  } if (x < number) {
    alert("小了")
  }
} while (x != number) {
  alert("对了")
}

//三个人求平均年龄
var n = Number(prompt("n"))
var age
var sum = 0

for (let i = 0; i < n; i++) {
  age = Number(prompt("年龄"))
  sum += age
} let he = (sum / n)
console.log((he).toFixed(2))

//输出两个数范围内的奇数和
var a = Number(prompt("a"))
var b = Number(prompt("b"))

if (a % 2 == 0) {
  a += 1
}

var sum = 0

while (a <= b) {
  sum += a
  a += 2
}
console.log(sum)

//输出两个数范围内能被17整除数的和
var m = Number(prompt())
var n = Number(prompt())

if (m % 17 != 0) {
  m += (17 - (m % 17))
}

var sum = 0

while (m <= n) {
  sum += m
  m += 17
}
console.log(sum)
