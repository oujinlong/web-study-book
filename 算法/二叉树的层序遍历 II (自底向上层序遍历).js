// https://juejin.cn/post/7052763089048961037/
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  const quene = root ? [root] : []
  const res = []
  while (quene.length) {
    const size = quene.length
    const level = []
    for (let index = 0; index < size; index++) {
      const node = quene.shift()
      node.left ? quene.push(node.left) : ''
      node.right ? quene.push(node.right) : ''
      level.push(node.val)
    }
    res.unshift(level) //和正序的层序遍历不同点，这里使用 unshift 方法放入数组中
  }
  return res
};
