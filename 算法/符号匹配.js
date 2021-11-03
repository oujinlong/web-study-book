
const f = function (s) {
  const stack = []
  for (let index = 0; index < s.length; index++) {
    const char = s[index]
    switch (char) {
      case '(':
        stack.push(')')
        break;
      case '[':
        stack.push(']')
        break;
      case '{':
        stack.push('}')
        break;
      default:
        const lastCharInStack = stack.pop()
        if (char !== lastCharInStack) {
          return false
        }
        break;
    }
  }
  return stack.length === 0
}

const str = '{([])}'
console.log(f(str))