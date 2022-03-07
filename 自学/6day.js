//某一年的第一月的第一天是星期几

//先去分是否为闰年
function 闰年(year) {
  if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    return true
  } return false
}

//再去区分月份所占了本年的多少天
function 月(year, month) {
  let day = 0

  for (let i = 1; i <= month; i++) {
      if (i == 2) {
        day = 29
      }if (!闰年(year)) {
        if (i == 2) {
          day = 28
        }
      }if (i == 1 || i == 3 || i == 5 || i == 7 || i == 8 || i == 10 || i == 12) {
        day = 31
      } if (i == 4 || i == 6 || i == 9 || i == 11)
        day = 30
    } return day
  }


  function rq(year, month) {
    let nday = 0
    let yday = 0
    let jz = (2022, 8)//周一

    for (let i = 1; i <= year; i++) {
      if (闰年(year)) {
        nday += 366
      } else nday += 365
    }


  }


