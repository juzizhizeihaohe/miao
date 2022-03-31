/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let a = strs[0][0]
  let b = ''

  for (let j = 0; j < strs.length; j++) {
    for (let i = 0; i < strs[j].length; i++) {
      if (strs[j][i] == strs[j++][i])
        a = a + strs[j][i]
    }
  } return a
};
