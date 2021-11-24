var swapNodes = function (head, k) {
  // 设置计数器
  let count = 1
  // 设置遍历指针
  let p = head
  // 定义第K个节点
  let front = null
  // 定义倒数第K个节点
  let back = head
  while (p) {
    // count = k 是， p为第 K 个节点
    if (count === k) {
      // 找到第K个节点
      front = p
    }
    // 当 count > k 时， back 指针开始移动
    if (count > k) {
      back = back.next
    }
    p = p.next
    count++
  }
  // 交换节点 val
  let temp = front.val
  front.val = back.val
  back.val = temp

  // 完成 return
  return head
};