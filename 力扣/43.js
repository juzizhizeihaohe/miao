
/**
* @param {string} num1
* @param {string} num2
* @return {string}
*/
var multiply = function (num1, num2) {
  let a = num1.length
  let sum = 0
  let j = 1
 
  for (let i = a - 1; i >= 0; i--) {
    sum += Number(num1[i]) * (Number(num2)) * j
    j = j * 10
  } return sum + ''
};
//可以计算，但是达到了js的精度极限，无法完整的计算出答案


