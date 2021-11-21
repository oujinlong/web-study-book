/**
 * @param {string} s
 * @return {number}
 */

const check = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }
    left++;
    right--
  }
  return true
}

var countSubstrings = function (s) {
  const dpList = new Array(s.length).fill(1)
  for (let i = 1; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      let str = s.slice(j, i + 1)
      if (check(str)) {
        dpList[i] = dpList[i] + 1
      }
    }
  }
  let res = 0
  dpList.forEach(n => {
    res += n
  })
  return res
};