//某一年的第一月的第一天是星期几

//先去分是否为闰年
function 闰年(year) {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return true
  } return false
}

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


function rq(year, month) {
  let day = 0
  let monthDay = 0
  let allDay = 0

  for (let i = 1; i < year; i++) {
    if (闰年(i)) {
      day += 366
    } else day += 365
  }

  for (let j = 1; j < month; j++) {
    day += 月(year, j)
  } day = (day + 1 ) % 7
return day
}



