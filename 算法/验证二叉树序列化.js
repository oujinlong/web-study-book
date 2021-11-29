/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function (preorder) {
  const list = preorder.split(',')
  const stack = []
  list.forEach(item => {
    stack.push(item)
    while (stack[stack.length - 2] === '#' && stack[stack.length - 1] === '#') {
      if (stack[0] === '#') {
        return false
      }
      stack.pop()
      stack.pop()
      stack.pop()
      stack.push('#')
    }
  })
  console.log(stack)
  return stack.length === 1 && stack[0] === '#'
};
