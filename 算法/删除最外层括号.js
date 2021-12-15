//https://juejin.cn/post/7041967137526644743

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let noMatchLeftCount = 0
  let res = ''
  for (let index = 0; index < s.length; index++) {
    const isLeft = s[index] === '('
    if (isLeft) {
      noMatchLeftCount++
      if (noMatchLeftCount === 1) {
        continue
      }
    } else {
      noMatchLeftCount--
      if (noMatchLeftCount === 0) {
        continue
      }
    }
    res += s[index]
  }
  return res
};

// var removeOuterParentheses = function (S) {
//   let count = 0, ans = '';
//   for (let i = 0; i < S.length; i++) {
//     if (S[i] === '(' && count++ > 0) ans += '('
//     if (S[i] === ')' && count-- > 1) ans += ')';
//   }
//   return ans;
// };
