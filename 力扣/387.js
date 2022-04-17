var firstUniqChar = function (s) {
  let a = {}

  for (let i = 0; i < s.length; i++) {
    let b = s[i]
    if (b in a) {
      a[b]++
    } else {
      a[b] = 1
    }
  }
  for (let j = 0; j < s.length; j++) {
    b = s[j]
    if (a[b] == 1) {
      return j
    }
  } return -1
};

var firstUniqChar = function (s) {
  let a = {}//用一个空数组，放置s中的每一项

  for (let i = 0; i < s.length; i++) {
    let b = s[i]//记录s遍历的项
    if (b in a) {//如果其已经被记录在a对象中，就给这项加上1
      a[b]++
    } else {
      a[b] = 1//如果没有被记录其中，这一项就等于1
    }
  }//循环结束记录完成

  for (let j = 0; j < s.length; j++) {
    let w = s[j]//记录s遍历的项
    if (a[w] == 1) {//如果a数组中记录的值有赋值为1的项，就直接输出他的下标
      return j
    }
  } return -1//如果没有下标值为1的，如题所示，输出-1
};

var firstUniqChar = function (s) {
  let a = {}

  for (let i = 0; i < s.length; i++) {
    let b = s[i]
    if (b in a) {
      a[b]++
    } else {
      a[b] = 1
    }
  } for (let j = 0; j < s.length; j++) {
    let c = s[j]
    if (a[c] == 1) {
      return j
    }
  } return -1
};
