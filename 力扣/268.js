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
