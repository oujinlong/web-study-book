/**
 * @param {string} s
 * @return {number}
 */
// var longestPalindrome = function(s) {
//     let res = []
//     let count = 0
//     s = s.split('')
//     s.forEach(n => {
//         if (res.indexOf(n) === -1) {
//             res.push(n)
//         } else {
//             res.splice(res.indexOf(n), 1)
//             count+= 2
//         }
//     })
//     count = res.length  ? count + 1 : count

//     return count
// };

var longestPalindrome = function (s) {
  let = 0
  s = s.split('')
  let map = {}
  s.forEach(n => {
    if (map[n]) {
      map[n] = map[n] + 1
    } else {
      map[n] = 1
    }
  })
  let min = 0
  Object.keys(map).forEach((key) => {
    const number = map[key]
    if (number % 2 !== 0) {
      min++
    }
  })
  return min > 0 ? s.length - min + 1 : s.length - min
};