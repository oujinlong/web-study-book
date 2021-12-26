// https://juejin.cn/post/7043888383763939335/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
  let p = head
  if (p.val === val) {
    head = p.next
    return head
  }
  while (p.next.val !== val) {
    p = p.next
  }
  p.next = p.next.next
  return head
};