//https://juejin.cn/post/7050490602747592718/

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
var minCameraCover = function (root) {
  if (root === null) {
    return 0
  }
  let count = 0 // 记录摄像头数量

  function helper(node) {
    if (node === null) {
      return 1 // 没有该节点了，我们可以认为他是不需要被监控，所以 return 1 表示已经被监控
    }
    const left = helper(node.left) // 后序遍历
    const right = helper(node.right) // 后序遍历
    if (left === 1 && right === 1) {
      // 左右节点都被监控，且没有安装摄像头，自己就是未被监控状态
      return 0
    }
    if (left + right >= 3) {
      // 左右节点都被监控，且至少有一个安装了摄像头
      return 1
    }
    // 左右没有被完全监控，自己必须安装摄像头
    count++ // 摄像头数量 +1
    return 2
  }
  let a = helper(root)
  if (a === 0) {
    // 根节点没有被监控的话还需要在根节点设置一个摄像头
    count++
  }
  return count
};
