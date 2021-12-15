/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 * https://juejin.cn/post/7041953167633809422/
 */
var validateStackSequences = function (pushed, popped) {
  const stack = []
  let popIndex = 0
  for (let index = 0; index < pushed.length; index++) {
    const number = pushed[index]
    stack.push(number)
    while (popIndex <= popped.length - 1 && popped[popIndex] === stack[stack.length - 1]) {
      stack.pop()
      popIndex++
    }
  }
  return stack.length === 0
};
