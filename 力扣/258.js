/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let g
  let s

  while (num >= 10) {
    g = num % 10
    s = (num - g) / 10
    num = g + s
  } return num
};

var addDigits = function (num) {
  let sum = 0
  let sumge = 0
  let db = num

  if (num <= 9) {
    return num
  } else {
    while (db != 0) {
      sumge = db % 10
      sum += sumge
      db = (db - sumge) / 10
    } while (sum >= 10) {
      sum = sum % 10 + (sum - sum % 10) / 10
    } return sum
  }
}//两个小时


var addDigits = function (num) {
  let sum = 0
  let sumge = 0
  let db = num

  if (num <= 9) {
    return num//直接排除个位的可能性
  } else {
    while (db != 0) {//把num的每一位取出相加至sum，直到减到sum为0跳出循环
      sumge = db % 10
      sum += sumge
      db = (db - sumge) / 10
    } while (sum >= 10) {//sum值还有可能是十位数直接取出sum的两位数相加
      sum = sum % 10 + (sum - sum % 10) / 10
    } return sum//输出最后的结果
  }
}

//完全可以使用递归的方式进行计算
/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
   let sum = 0
   let ge = 0

   while (num > 0) {
     ge = num % 10
     sum += ge
     num = (num - ge) / 10
     
   } if (sum < 10) {
     return sum
   } else {
     return addDigits(sum)
   }
};
