// http://noi.openjudge.cn/ch0103/
// 初级计算编程
{
  var a = Number(prompt("a"))
var b = Number(prompt("b"))
var c = Number(prompt("c"))

var sum = (a + b) * c
console.log(sum)}


{var x = Number(prompt("x"))
var a = Number(prompt("a"))
var b = Number(prompt("b"))
var c = Number(prompt("c"))
var d = Number(prompt("d"))

var fx = a * x ** 3 + b * x ** 2 + c * x + d 

console.log(fx)}


{var n = Number(prompt("n"))

var ge = n % 10
var shi = ((n - ge) % 100)/10
var bai = (n - (ge + shi))/100

var sum = (ge + "" + shi + "" + bai + "")
console.log(parseInt(sum))}


{var a = Number(prompt("a"))
var b = Number(prompt("b"))

  var chu = (a % b).toFixed(4)
  console.log(chu)
}

// http://noi.openjudge.cn/ch0104/09/
// 逻辑计算编程
{
  var n = Number(prompt("n"))

  if (n % 3 == 0) {
    console.log(3)
  }
  if (n % 5 == 0) {
    console.log(5)
  }
  if (n % 7 == 0) {
    console.log(7)
  }
}

{
  var a = Number(prompt("a"))
  var b = Number(prompt("b"))
  var c = Number(prompt("c"))

  if (a > b && a > c) {
   console.log(a)
  } else if (b > a && b > c) {
    console.log(b)
  } else {
    console.log(c)
 }
}


var a = Number(prompt("a"))

if (a < 0) {
  console.log((-(a)).toFixed(2))
} else if(a >= 0){
  console.log((a).toFixed(2))
}



var day = Number(prompt("day"))
 
if (day == 1 || day == 3 || day == 5) {
  console.log("NO")
} else {
  console.log("YES")
}
