// https://juejin.cn/post/7048954182211993614/
var countNodes = function (root) {
  if (root === null) {
    return 0
  }
  return 1 + countNodes(root.left) + countNodes(root.right)
};
