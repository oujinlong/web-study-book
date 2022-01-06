// https://juejin.cn/post/7049704612521050143/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */

var isSameTree = function (subA, B) {
  if (B === null) {
    return true // B遍历完了都没有 return false 的话，那么在这里可以 return true
  } else if (subA === null && B !== null) {
    return false // A已经没了，但是B还有，说明B不会是A的子树， return false
  }
  if (subA.val !== B.val) {
    return false // 当前节点不相等 return false
  }
  return isSameTree(subA.left, B.left) && isSameTree(subA.right, B.right) // 递归比较
}

var isSubStructure = function (A, B) {
  if (B === null) {
    return false
  }
  const stack = [A]
  while (stack.length) {
    const nodeA = stack.pop()
    nodeA.right && stack.push(nodeA.right)
    nodeA.left && stack.push(nodeA.left)
    if (isSameTree(nodeA, B)) {
      return true
    }
  }
  return false
};
