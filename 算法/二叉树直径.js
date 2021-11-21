// https://juejin.cn/post/7032310527464308772/

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
 * @return {number}
 */

var getNodeHeight = function (root) {
  if (root === null) return 0
  return Math.max(getNodeHeight(root.left), getNodeHeight(root.right)) + 1
}

var diameterOfBinaryTree = function (root) {
  if (root === null) return 0
  let rootLength = getNodeHeight(root.left) + getNodeHeight(root.right)
  return Math.max(rootLength, diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
}

// var diameterOfBinaryTree = function(root) {
//   let max = 1;
//   var getNodeHeight = function (root) {
//     if (root === null) return 0
//     const a = getNodeHeight(root.left)
//     const b = getNodeHeight(root.right)
//     max = Math.max(max, a + b + 1)
//     return Math.max(a, b) + 1
//  }
//      getNodeHeight(root)

//  return max - 1
// };


