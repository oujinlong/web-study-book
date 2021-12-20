// [掘金](https://juejin.cn/post/7043816750546157582/)
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
  let stack = []
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    // 第一个出现的必然进栈
    if (stack.length === 0 && (char === '(' || char === ')')) {
      stack.push({ char, index })
      continue
    }
    if (char === ')') {
      if (stack[stack.length - 1].char === '(') {
        stack.pop()
      } else {
        stack.push({ char, index })
      }
    } else if (char === '(') {
      stack.push({ char, index })
    }
  }
  stack = stack.map(i => { return i.index })
  let count = 0
  s = s.split('')
  while (count < stack.length) {
    s.splice(stack[count] - count, 1)
    count++
  }
  return s.join('')
};
