/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  return s.reverse()
  // for (let index = 0 ; index < Math.floor(s.length / 2); index++) {
  //     let left = index
  //     let right = s.length - 1 - index
  //     let temp = s[left]
  //     s[left] = s[right]
  //     s[right] = temp
  // }
  // let left = 0
  // let right = s.length - 1
  // while (left < right) {
  //     if (s[left] !== s[right]) {
  //           let temp = s[left]
  //     s[left] = s[right]
  //     s[right] = temp 
  //     }

  //     left++
  //     right--
  // }
};