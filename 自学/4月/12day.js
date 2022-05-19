//使用分支来得到结果的不同方式

function mb(需要得到的结果) {
  function kn(初始值, 历史) {

    if (初始值 == 需要得到的结果) {
      console.log(历史)//输出所有的结果
    } if (初始值 > 需要得到的结果) {
      return
    }
    return kn(初始值 * 3, "(" + 历史 + ")" + " * 3") ||
      kn(初始值 + 5, 历史 + " + 5")
  }
  return kn(1, "1")
}



function mb(需要得到的结果) {
  function kn(初始值, 历史) {

    if (初始值 == 需要得到的结果) {
      return (历史)//返回第一个相等的结果
    } if (初始值 > 需要得到的结果) {
      return
    }
    return kn(初始值 * 3, "(" + 历史 + ")" + " * 3") ||
      kn(初始值 + 5, 历史 + " + 5")
  }
  return kn(1, "1")
}

function mb(需要得到的结果) {
  let a = []
  function kn(初始值, 历史) {
    if (初始值 == 需要得到的结果) {
      a.push(历史)

    } if (初始值 > 需要得到的结果) {
      return
    }
    return kn(初始值 * 3, "(" + 历史 + ")" + " * 3") ||
      kn(初始值 + 5, 历史 + " + 5")
  }
  kn(1, "1")
  return a
}//返回所有可能性的结果，并保存在数组中
