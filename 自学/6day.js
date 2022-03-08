//某一年的第一月的第一天是星期几
//年份和月份是周期性的变化，得知从第一个世纪到现在月份的总计天数，就可以推导出这个月的第一天是星期几

//先去分是否为闰年
function 闰年(year) {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return true
  } return false
}
//润年的判断条件为能被4整除，但不能被100整除，但又能被400整除的数字，此处输入的形参，进入判断后输出真或假，可优化为

// function 闰年(year) {
//   return year % 4 == 0 && year % 100 != 0 || year % 400 == 0 
// }

//再计算每个月有多少天
function 月(year, month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      if (闰年(year)) {
        return 29;
      } else {
        return 28;
      }
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
}

//用switch语法处理12个月的不同情况，区分大小月和闰年与否的2月特殊情况，返回对应的天数，此处可以使用多个if语句进行判断

function rq(year, month) {
  let day = 0

  //先给一个记录参数，记录天数

  for (let i = 1; i < year; i++) {
    if (闰年(i)) {
      day += 366
    } else day += 365
  }

  //计算年数共计的天数，循环不同的情况并记录，此处有优化写法，
  //var year = year - 1
  //(形参提供的年份还没有完全结束，要计算共计的天数需要分开计算年和月的值)
  //var day = y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
  //直接在这里区分，闰年非闰年的天数，运算后直接出结果，可以省去一个函数，得出年份的总天数


  for (let j = 1; j < month; j++) {
    day += 月(year, j)
  }//循环12个月的不同月份，带入区分每个月有多少天的函数，加上年份的总天数，得到年加月的总计天数
  day = (day + 1) % 7
  //一周共计7天，对照实际的星期数，修改结果
  return day
}


//优化
function 月(year, month) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 2:
      if (闰年(year)) {
        return 29;
      } else {
        return 28;
      }
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
  }
}

function rq(year, month) {
  let day = 0
  let y = year - 1
  
  var yday = y * 365 + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
 
  for (let j = 1; j < month; j++) {
    day += 月(year, j)
  } day += yday
 
  day = (day + 1) % 7
 
  return day
}

