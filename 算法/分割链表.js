// https://juejin.cn/post/7037528867073949709/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let less = null // less 链表
  let lessP = null // less 链表指针
  let more = null // more 链表
  let moreP = null // more 链表指针
  let p = head // 原链表指针
  while (p) {
    if (p.val < x) {
      if (less === null) {
        less = p
        lessP = less
      } else {
        lessP.next = p
        lessP = lessP.next
      }
    } else {
      if (more === null) {
        more = p
        moreP = more
      } else {
        moreP.next = p
        moreP = moreP.next
      }
    }
    p = p.next
  }
  // 处理边界问题
  moreP ? moreP.next = null : ''
  lessP ? lessP.next = more : less = more
  return less
};