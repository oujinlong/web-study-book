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
 * https://juejin.cn/post/7052380937421586462
 */
var widthOfBinaryTree = function (root) {
  const quene = []
  root.val = 0
  let maxWidth = 0
  quene.push(root)
  while (quene.length > 0) {
    const levelCount = quene.length
    maxWidth = Math.max(quene[quene.length - 1].val - quene[0].val + 1, maxWidth)
    let isLoop = quene[0].val >= 100
    for (let index = 0; index < levelCount; index++) {
      const tempNode = quene.shift()
      if (isLoop) {
        tempNode.val -= 100
      }
      if (tempNode.left) {
        tempNode.left.val = 2 * tempNode.val + 1
        quene.push(tempNode.left)
      }
      if (tempNode.right) {
        tempNode.right.val = 2 * tempNode.val + 2
        quene.push(tempNode.right)
      }
    }
  }
  return maxWidth
};