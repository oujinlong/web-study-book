// https://juejin.cn/post/7052768928791003150/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const quene = root ? [root] : []
  const res = []
  while (quene.length) {
    const size = quene.length // 结果数组
    const level = [] // 每层节点 val 数组
    for (let index = 0; index < size; index++) {
      // 层遍历
      const node = quene.shift()
      node.left ? quene.push(node.left) : ''
      node.right ? quene.push(node.right) : ''
      level.push(node.val) // 保存当前层的某个 node 的值
    }
    res.push(level) // 将层存储
  }

  return res // 返回结果
}
