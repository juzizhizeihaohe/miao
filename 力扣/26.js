/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let max = 0
  let a = []
  let b = 0
  let c = nums.length

  for (let i = 0; i < c; i++) {
    b = nums.shift()

    if (b > max && max != b) {
      a.push(b)
      max = b
    }

  } return a
};
//因为是升序排列，所以可以用替换max值的方式来做对比，新建一个数组，排除掉相同的项，但此方法对于题目的要求没有达到

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let long = nums.length
  let jc = 0 //需要引入另一个数字来放置不一样的数字

  for (let i = 0; i < long; i++){
    if (nums[i] != nums[i - 1]) {//如果数组的后一项不等于，前一项，就把nums的第一项替换为这个数字
      nums[jc] = nums[i]
      jc++//这个递增参数控制放置不同数字的位置
    }
  }return jc
};
