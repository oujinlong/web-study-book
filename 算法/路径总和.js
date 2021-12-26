// https://juejin.cn/post/7046060059213692964/

var hasPathSum = function (root, targetSum) {
  // 首要判断条件
  if (root === null) {
    return false
  }
  // 遍历到最后，判断是否等于最终剩下的 targetSum
  if (root.left === null && root.right === null) {
    return root.val === targetSum
  }

  // 递归
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
};
