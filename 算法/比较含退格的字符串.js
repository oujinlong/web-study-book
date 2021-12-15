// https://juejin.cn/post/7041601723512815623/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var f = function (s) {
  let res = []
  for (let index = 0; index < s.length; index++) {
    if (s[index] === '#') {
      res.pop()
    } else {
      res.push(s[index])
    }
  }
  return res.join('')
}
var backspaceCompare = function (s, t) {
  return f(s) === f(t)
};
