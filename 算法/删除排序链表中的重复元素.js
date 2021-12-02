// https://juejin.cn/post/7037104679557267492/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  const list = []
  let p = head
  if (p) {
    list.push(p.val)
    while (p.next) {
      if (list.indexOf(p.next.val) === -1) {
        list.push(p.next.val)
        p = p.next
      } else {
        p.next = p.next.next
      }
    }
  }

  return head
};