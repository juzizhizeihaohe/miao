
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
    return a * powr(a, n - 1)
  }
}


//阶乘
function factorial(x) {
  if (x == 1) {
    return 1
  } else {
    return x * factorial(x - 1)
  }
}

//斐波那契数列的第n项是几
function fibb(n) {
  if (n < 3) {//斐波那契数列前两项都是1，比第三位小的n都返回1
    return 1
  } else {
    return fibb(n - 2) + fibb(n - 1)
  }
}

/*fibb(4)
因为4>3
所以进入else
fibb(4 - 2) + fibb(4 - 1)
fibb(2) + fibb(3)

fibb(2),fibb(3)
因为2<3,3=3
所以直接返回1，和进入else
fibb(3 - 2) + fibb(3 - 1)
fibb(1) + fibb(2)

fibb(1),fibb(2)
因为1<3，2<3
所以直接返回1

fibb(1) + fibb(2) == 1 + 1 返回2

fibb(2) == 1
fibb(3) == 2
fibb(2) + fibb(3) == 3
fibb(4) == 3
*/

function fibb(n) {
  if (n < 3) {
    return 1
  } else {
    return fibb(n - 1) + fibb(n - 2)//斐波那契数列的第三项是前两项的和（模糊的的感觉，递归时要根据实际的计算过程来书写）
  }
}
