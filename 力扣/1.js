/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};
//笨b双循环

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {//关键点就是不能重复遍历之前的数组内容
      if (nums[i] + nums[j] == target) {
        return [i, j]
      }
    }
  }
};
//笨b双循环

//单循环数组下标记录
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let jilu = []
  let long = nums.length

  for (let i = 0; i < long; i++) {
    if (jilu[target - nums[i]] !== undefined) {
      return [jilu[target - nums[i]], i]
    } else {
      jilu[nums[i]] = i
    }
  }
};

var twoSum = function (nums, target) {
  let jilu = []//先建立放置待找数字下标的空数组
  let long = nums.length

  for (let i = 0; i < long; i++) {
    if (jilu[target - nums[i]] !== undefined) {//第一次必不进循环，会用目标值减去形参数组的第一位，如果查找数组里没有对应的值，就进else，【直到找到有对应的值】
      return [jilu[target - nums[i]], i]//返回查找数组里的数，和对应形参的下标值
    } else {
      jilu[nums[i]] = i//用形参数组的第一个值作为下标值，放入顺序，
    }
  }
};
