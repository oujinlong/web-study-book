/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let left = 0
  let right = Math.floor(Math.sqrt(c))
  while (left <= right) {
    const leftNumer = left * left
    const rightNumber = right * right
    const sum = leftNumer + rightNumber
    if (sum === c) {
      return true
    } else if (sum > c) {
      right--
    } else {
      left++
    }
    if (leftNumer > c) {
      return false
    }
  }
  return false
};