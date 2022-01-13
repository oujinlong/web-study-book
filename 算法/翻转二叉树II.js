// https://juejin.cn/post/7052764247834492936/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  const stack = root ? [root] : []
  while (stack.length) {
    // 前序遍历
    const node = stack.pop()
    // 节点交换
    const tempNode = node.left
    node.left = node.right
    node.right = tempNode
    node.left ? stack.push(node.left) : ''
    node.right ? stack.push(node.right) : ''
  }
  // 返回根节点
  return root
};

