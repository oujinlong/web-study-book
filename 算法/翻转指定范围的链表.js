// https://juejin.cn/post/7037036490353803271/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverse = function (head, end) {
  let pre = end
  let cur = head
  while (cur !== end) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}

var reverseBetween = function (head, left, right) {
  if (head.next === null) {
    return head
  }
  let tempHead = head
  let tempEnd = head
  let index = 1
  let pre = null
  let after = null
  while (index < right) {
    if (index < left) {
      pre = tempHead
      tempHead = tempHead.next
    }
    tempEnd = tempEnd.next
    index++
  }
  after = tempEnd.next
  console.log({ tempHead, after })
  const newList = reverse(tempHead, after)
  console.log({ newList, pre })
  pre ? pre.next = newList : head = newList
  return head
};
