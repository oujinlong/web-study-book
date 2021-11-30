/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [], sign = '+', number = ''
  for (let index = 0; index < s.length || number; index++) {
    const char = s[index]
    if (char === ' ') continue
    if (/\D/.test(char)) {
      if (sign === '+') {
        stack.push(parseInt(number))
      } else if (sign === '-') {
        stack.push(-parseInt(number))
      } else if (sign === '*') {
        stack.push(stack.pop() * parseInt(number))
      } else {
        stack.push(stack.pop() / parseInt(number) | 0)
      }
      sign = char
      number = ''
    } else {
      number = number + char

    }
  }
  console.log(stack)
  return stack.reduce((p, v) => p + v)
};