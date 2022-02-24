// https://juejin.cn/post/7053141575030800392/
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
 * @return {boolean}
 */

var getHeight = function (child) {
  if (!child) { // 记住这个 root 是子节点
    return 1 // 没有子节点，那深度就是 1
  }
  return Math.max(getHeight(child.left), getHeight(child.right)) + 1
}

// 两种方案求 深度都可以
// var getHeight = function (root) {
//     if (!root) {
//         return 0
//     }
//    if (!root.left && !root.right) {
//        return 1
//    }
//    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
// }


var isBalanced = function (root) {
  if (!root) {
    return true
  }
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
