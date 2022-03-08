//带入rgb颜色的函数
function rgb(r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")"
}

//或者使用${}模板字符串，使用的是反引号`包裹起来的`
 
  for (let x = 1; x < 100; x++){
    for (let y = 1; y < 100; y++){
      var color = `rgb(${x}, ${y},255)`
    }
}console.log(rgb)
