// https://juejin.cn/post/7042340656617881637/
var transList = function (head) {
  let cur = head
  let pre = null
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

var addTwoNumbers = function (l1, l2) {
  let tL1 = transList(l1)
  let tL2 = transList(l2)
  const res = new ListNode(0)
  let p = res
  let isAdd = false
  while (tL1 || tL2) {
    const number1 = tL1 ? tL1.val : 0
    const number2 = tL2 ? tL2.val : 0
    let res = isAdd ? number1 + number2 + 1 : number1 + number2
    isAdd = res >= 10
    p.next = new ListNode(res % 10)
    p = p.next
    tL1 = tL1 ? tL1.next : null
    tL2 = tL2 ? tL2.next : null
  }
  if (isAdd) {
    p.next = new ListNode(1)
  }

  return transList(res.next)
}
