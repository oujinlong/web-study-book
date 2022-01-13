// https://juejin.cn/post/7052632935081443364/
/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  let res = []
  const stack = root ? [root] : []
  while (stack.length) {
    const node = stack.pop()
    for (let index = node.children.length - 1; index >= 0; index--) {
      stack.push(node.children[index])
    }
    res.push(node.val)
  }
  return res
};
