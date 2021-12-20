/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://juejin.cn/post/7036567848197554190
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let map = new Map()
  map.set(head, head)
  while (head) {
    head = head.next
    if (map.has(head)) {
      return map.get(head)
    } else {
      map.set(head, head)
    }

  }
  return null
};