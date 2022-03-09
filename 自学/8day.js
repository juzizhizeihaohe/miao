//递归
//一个函数自己直接或间接的调用自己就叫递归



//计算一个数的次方
function powr(a, n) {
  if (n == 0) {
    return 1
  } else {
    return a * powr(a, n - 1)
  }
}

//计算过程分析
powr(4, 3)
//因为 3 != 0
//所以进 else
//进入后返回 4 * powr（4，3 — 1）
//此时暂停计算
4 * powr(4, 3 - 1)
//再一次调用powr函数，而且形参3减1

powr(4, 2)
//因为 2 != 0
//所以进 else
//进入后返回 4 * powr（4，2 — 1）
//此时暂停计算
4 * powr(4, 2 - 1)
//再一次调用powr函数，而且形参2减1

powr(4, 1)
//因为 1 != 0
//所以进 else
//进入后返回 4 * powr（4，1 — 1）
//此时暂停计算
4 * powr(4, 1 - 1)
//再一次调用powr函数，而且形参1减1

powr(4, 0)
//因为 0 == 0
//所以返回1

//传递给
4 * powr(4, 1 - 1)
powr(4, 1 - 1) == 1
4 * 1 == 4

//传递给
4 * powr(4, 2 - 1)
powr(4, 2 - 1) == 4
4 * 4 == 16

//传递给
4 * powr(4, 3 - 1)
powr(4, 3 - 1) == 16
4 * 16 == 64

//已经返回头部函数，直接返回64



//要点
function powr(a, n) {
  if (n == 0) {
    return 1
  }
  //需要建立返回的限制 
  else {
    return a * powr(a, n - 1)
  }
  //设置调用的节点，且要做出变化比如此处的n - 1
}


//自己写
function powr(a, n) {
  if (n == 0) {
    return 1
  } else {
    return a * powr(a , n - 1)
  }
}
