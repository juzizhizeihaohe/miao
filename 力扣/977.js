/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let a = []
  let b = []
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    a.push(nums[i] * nums[i])
  } for (let i = 0; i < a.length; i++) {
    b[nums[i]] = nums[i]
    if (nums[i] > max) {
      nums[i] = max
    }
  } return b
};
