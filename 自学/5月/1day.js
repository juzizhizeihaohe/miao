function f(a, b, c) {
  return a + b + c
}

let a = [1, 2, 3, 4, 5, 6, 7]

console.log(f(...a))

console.log(f.apply(null, a))


'sdaf asdf jklf uio0 awed'.split(' ')
//拆分函数，用指定的形参拆分字符串至数组

let b = ['num,name,score', '1,zc,49', '2,ls,43', '3,ww,86', '4,zs,58']

b.splice(',')

function f(ary, chushizhi, fct) {
  var ary = ary
  var chushizhi = chushizhi
  for (let i = 0; i < ary.length; i++) {
    chushizhi = fct(chushizhi)
  }
  console.log(chushizhi)
}

function bind 
