function factorial(start, end) {
  let TemporaryStorage = 1
  let sum = 0
  for (let i = start; i <= end; i++) {
    TemporaryStorage *= i
    sum += TemporaryStorage
  } console.log(sum)
}


 
