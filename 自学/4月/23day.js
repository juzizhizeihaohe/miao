
function arrayToList(array) {
  let mubiao = []
  for (let i = 0; i < array.length; i++) {
    let nod = {
      val: array[i],
      next: NaN
    }
    mubiao.push(nod)
  }
  for (let j = 0; j < mubiao.length; j++) {
    mubiao[j].next = [j + 1]
  } console.log(mubiao)
}

function arrayToList2(array) {
  let mubiao = []
  let j = 0
  for (let i = 0; i < array.length; i++) {
    let nod = {
      val: array[i],
      next: j++
    }
    mubiao.push[nod]
  } return mubiao
}

function arrayToArray(head) {
  let mubiao = []
  for (let i = 0; i < head.length; i++) {
    mubiao.push(head[i].val)
  }
}

function nth(list, n) {
  let b = []
  let nod = {
    val: array,
    next: NaN
  }
}
