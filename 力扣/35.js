
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let a = 0
  if (nums[nums.length - 1] < target) {
    return nums.length  
  }

    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < target) {
        a++
      }
    } return a
};
