/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let a = []

  for (let i = 1; i <= n; i++) {
    let p = 1
    if (i % 3 == 0 && i % 5 == 0) {
      a.push("FizzBuzz")
      p = 2
    } else if (i % 3 == 0) {
      a.push("Fizz")
      p = 2
    } else if (i % 5 == 0) {
      a.push("Buzz")
      p = 2
    }
    if (p == 1) {
      a.push(`${i}`)
    }
  } return a
};//想复杂了，p的判断值完全没有必要，题目需要的是只单独进一次就可以了，用if else 循环完全可以办到,如下

var fizzBuzz = function (n) {
  let a = []

  for (let i = 1; i <= n; i++) {
    let p = 1
    if (i % 3 == 0 && i % 5 == 0) {
      a.push("FizzBuzz")
    } else if (i % 3 == 0) {
      a.push("Fizz")
    } else if (i % 5 == 0) {
      a.push("Buzz")
    } else {
      a.push("" + i)
    }
  } return a
};

//`${i}`这个语法可以在字符串里带入变量，此处完全可以直接用"" + i 的方式把i变成字符串
