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

var sun = function (candyType) {
  let a = candyType[0]

  for (let i = 1; i < candyType.length; i++) {
    if (a != candyType[i]) {
      return false
    }
  } return true
}

var distributeCandies = function (candyType) {
  let long = candyType.length
  let CanEat = long / 2
  var sumd = nosone(candyType)

  if (sun(candyType)) {
    return 1
  } if (CanEat >= sumd) {
    return sumd
  } return CanEat
}

var distributeCandies = function (candyType) {
  let a = 0
  let b = []
  let c = candyType.length / 2

  for (let i = 0; i < candyType.length; i++) {
    if (candyType[i] != a) {
      b.push(candyType[i])
      a = candyType[i]
    }
  } if (b.length == 1) {
    return c
  } if (b.length > c) {
    return c
  } return b.length
};
