//递归返回的值如果调用了两次函数，必须要等第一个调用的函数先先展开完成，才能计算后面的一个调用函数，
function fibb(n) {
  if (n < 3) {
    return 1
  } else {
    return fibb(n - 1) + fibb(n - 2)
  }
}
//fibb(n - 1)先要把这个函数全部展开完成，才能计算fibb(n - 2)的内容

