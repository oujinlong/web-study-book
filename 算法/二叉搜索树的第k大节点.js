// https://juejin.cn/post/7048964652855722015/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function (root, k) {
  let stack = []
  let res = []
  stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    res.push(node.val)
    node.right ? stack.push(node.right) : ''
    node.left ? stack.push(node.left) : ''
  }
  return res.sort((a, b) => { return b - a })[k - 1]
};
