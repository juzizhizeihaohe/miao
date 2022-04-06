/**
 * @param {number[]} candyType
 * @return {number}
 */

var nosone = function (candyType) {
  let sum = 0
  let start = 0
  var long = candyType.length
  for (let i = 0; i < long; i++) {
    if (start != candyType[i]) {
      if (candyType[i] != 0) {
        sum++
      }
    } start = candyType[i]
  } return sum
}


var distributeCandies = function (candyType) {
  let long = candyType.length
  let CanEat = long / 2
  var sumd = nosone(candyType)



  if (CanEat < sumd) {
    return CanEat
  } if (CanEat == 1) {
    return sumd
  } if (sumd == 1) {
    return CanEat
  }
  return sumd
}

