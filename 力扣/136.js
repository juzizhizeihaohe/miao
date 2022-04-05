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

