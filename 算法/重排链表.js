/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  https://juejin.cn/post/7042367292721594398/
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

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

var reorderList = function (head) {
  let p = head
  let middle = p
  while (p && p.next && p.next.next) {
    p = p.next.next
    middle = middle.next
  }
  middle = transList(middle.next)
  p = head
  let m = middle
  while (m) {
    const pNext = p.next
    const mNext = m.next
    p.next = m
    p.next.next = pNext
    p = pNext
    m = mNext
  }
  p.next = null
};
