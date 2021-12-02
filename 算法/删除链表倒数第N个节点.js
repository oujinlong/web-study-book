// https://juejin.cn/post/7037095124102283295/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head.next === null) return new ListNode().next
  let p = head
  let deleteNode = head
  let index = 0
  let pre = null
  while (p) {
    if (index >= n) {
      pre = deleteNode
      deleteNode = deleteNode.next
    }
    index++
    p = p.next
  }
  pre === null ? head = head.next : pre.next = deleteNode.next
  return head
};
