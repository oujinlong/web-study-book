var createStack = function (root, stack) {
  if (root === null) {
    return
  }
  stack.push(root)
  root.right ? createStack(root.right, stack) : ''
  root.left ? createStack(root.left, stack) : ''
}

var postorderTraversal = function (root) {
  let stack = []
  createStack(root, stack)
  let res = []
  while (stack.length) {
    res.push(stack.pop().val)
  }
  return res
};
