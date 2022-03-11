function factorial(x) {
  if (x == 1) {
    return 1
  } else return x * factorial(x - 1)
}

function fibb(n) {
  if (n < 3) {
    return 1
  } else {
    return fibb(n - 1) + fibb(n - 2)
  }
}

//输入n个数然后反向输出
function inputAndReberse(n) {
  if (n == 0) {
    return
  } let a = Number(prompt())
  inputAndReberse(n - 1)
  console.log(a)
}
