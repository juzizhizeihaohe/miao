/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let a = {}
  for (let i = 0; i < s.length; i++) {
    let b = s[i]
    if (b in a) {
      a[b]++
    } else {
      a[b] = 1
    }
  } return a
};
