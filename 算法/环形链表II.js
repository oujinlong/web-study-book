/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

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