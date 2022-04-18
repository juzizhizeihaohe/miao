function arrayTolList(array) {
  var nodes = []
  for (let i = 0; i < array.length; i++) {
    var node = {
      val: array[i],
      next: null
    }
    nodes.push(node)
  }
  for (let b = 0; b < nodes.length - 1; b++) {
    nodes[b].next = nodes[i + 1]
  } return nodes[0]
}
