/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//     if (head === null || head.next === null) {
//         return false
//     }
//     let list = []
//     while(head) {
//         if (list.indexOf(head) !== -1) {
//             return true
//         }
//         list.push(head)
//         head = head.next
//     }
//     return false
// };

var hasCycle = function (head) {
  let slow = head
  let quick = head
  while (quick && quick.next !== null && quick.next.next !== null) {
    quick = quick.next.next
    slow = slow.next
    if (quick === slow) {
      return true
    }
  }
  return false
}