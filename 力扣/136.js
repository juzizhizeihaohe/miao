var singleNumber = function (nums) {
  let butong = nums[0]
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (butong !== nums[j]) {
        butong = nums[i]
      }
    }
  } return butong
};

var singleNumber = function (nums) {
  let a = 0
  let b = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        a++
      }
    } b.push(a)
  } return b
};

var singleNumber = function (nums) {
  if (nums.length == 1) {
    return nums[0]
  }
  let max = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] > max) {
      max = nums[j]
    }
  }
  let a = Array(max + 1).fill(0)

  for (let i = 0; i < nums.length; i++) {
    a[nums[i]] = a[nums[i]] + 1
  }
  for (let w = 0; w < a.length; w++) {
    if (a[w] == 1) {
      return w
    }
  }
}
//处理不了负数

var singleNumber = function (nums) {
  let a = 0
  for (let i = 0; i < nums.length; i++) {
    a = a ^ nums[i]
  } return a
};
//异或运算，把十进制数字转换为二进制，对比每一项，相同得0，不同得1，遵循交换律和结合率

var singleNumber = function (nums) {
  let b = []
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i]
    if (a in b) {
      b[a]++
    } else {
      b[a] = 1
    }
  } for (let j = 0; j < b.length; j++) {
    if (b[j] == 1) {
      return j
    }
  }
};
//映射算法，但无法统计负数
var singleNumber = function (nums) {
  let b = []
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i]
    if (a in b) {
      b[a]++
    } else {
      b[a] = 1
    }
  } for (let j in b) {//for(in)可以遍历数组的所有项，无论是负数或者是小数，只要存在
    if (b[j] == 1) {
      return j
    }
  }
};
//修改后可以统计负数
