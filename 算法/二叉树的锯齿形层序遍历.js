// https://juejin.cn/post/7052777368347213838/
var zigzagLevelOrder = function (root) {
  const quene = root ? [root] : []
  const res = []
  let flag = true // 记录翻转
  while (quene.length) {
    const size = quene.length
    const level = []
    for (let index = 0; index < size; index++) {
      const node = quene.shift()
      node.left ? quene.push(node.left) : ''
      node.right ? quene.push(node.right) : ''
      level.push(node.val)
    }
    res.push(flag ? level : level.reverse()) // 间隔翻转
    flag = !flag // 交替
  }
  return res
};
