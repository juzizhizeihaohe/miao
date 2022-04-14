var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let a = s[i]
    for (let j = 0; j < s.length; j++) {
      if (a == s[i + 1]) {
        a = s[a++]
      }
    }

  } return i

};
