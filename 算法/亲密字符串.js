// https://juejin.cn/post/7039695534675738632/
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var isHasSameChar = function (s) {
  s = s.split('')
  return [...new Set(s)].length !== s.length
}

var buddyStrings = function (s, goal) {
  if (s === goal) {
    return isHasSameChar(s)
  }
  if (s.length !== goal.length) {
    return false
  }

  let count = 0
  let sList = []
  let gLost = []
  for (let index = 0; index < s.length; index++) {
    if (s[index] !== goal[index]) {
      count++
      if (count > 2) {
        return false
      }
      sList.push(s[index])
      gLost.push(goal[index])
    }
  }
  if (count <= 1) {
    return false
  }
  return sList[1] === gLost[0] && sList[0] === gLost[1]
};
