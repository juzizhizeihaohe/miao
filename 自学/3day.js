//乘方计算
var a = Number(prompt("a"))
var n = Number(prompt("n"))
var z = a

for (var i = 1; i < n; i++) {
  a *= z
} alert(a)

// 人口增长计算
var number = Number(prompt("现有人口"))
const year = Number(prompt("年数"))
const stopnjaRasti = 0.001

for (let i = 1; i <= year; i++) {
  number = number + (number * stopnjaRasti)
} console.log((number).toFixed(4))

//复合利率
let R = (Number(prompt("r")) * 0.01)
let M = Number(prompt("m"))
let Y = Number(prompt("y"))

for (let i = 1; i <= Y; i++) {
  M = M + (M * R)
} console.log(parseInt(M))

//买房子
debugger
let N = Number(prompt("工资"))
const j = N
const K = 0.1
let totalPrice = 200
let f = true

for (let i = 1; i <= 20; i++) {
  totalPrice = totalPrice + (totalPrice * K)
  N = N + j
  if (N >= totalPrice) {
    alert(i + 1)
    break
    f = false
  }
}
if (f = true) {
  console.log("Impossible")
}

//斐波那契数列
const K = Number(prompt("k"))
let a = 1
let b = 1
let c = 0

for (let i = 1; i < K; i++) {
  c = a + b
  a = b
  b = c
} alert(a)

//小球弹跳
let h = 20
let z = h
const time = 10

for (let i = 2; i <= time; i++) {
  h = h / 2
  z = z + 2 * h
} console.log(z.toFixed(4), (h / 2).toFixed(7))

