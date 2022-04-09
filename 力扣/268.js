/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let a = []
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    a[nums[i]] = nums[i]
    if (nums[i] > max) {
      max = nums[i]
    }
  }
  for (let j = 0, c = 0; j < a.length; j++, c++) {
    if (a[j] != c) {
      return j
    }
  } if (nums.length > max) {
    return max + 1
  }
};
//映射

//因为知道他们是有序数组，所以可以直接把他们的理论值加起来，相减，得到结果


var missingNumber = function (nums) {
  let max = 0
  let sum = 0
  let sjsum = 0
  let b = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i]
    }
     for (let j = 0, c = 0; j < a.length; j++, c++) {
    if (a[j] != c) {
      return j
    }
  } if (nums.length > max) {
    return max + 1
  }
  } for (let j = 0; j < max; j++) {
    b = b + 1
    sum = b + sum
  } for (let p = 0; p < nums.length; p++) {
    sjsum += nums[p]
  } return sum - sjsum
}
