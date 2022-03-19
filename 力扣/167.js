/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] == target) {
        return [i + 1, j + 1]
      }
    }
  }
};//笨b双指针


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1

  while (numbers[i] + numbers[j] != target) {
    if (numbers[i] + numbers[j] > target) {
      j--
    } if (numbers[i] + numbers[j] < target) {
      i++
    }
  } return [i + 1, j + 1]
}//zheng'jin


