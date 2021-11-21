/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// var getKthFromEnd = function(head, k) {
//     let list = []
//     while(head) {
//         list.push(head)
//         head = head.next
//     }

//     return list[list.length-k]
// };

// var getKthFromEnd = function(head, k) {
//     let index = 0
//     let p = head
//     while(p) {
//         index++
//         p = p.next
//     }
//     while(head) {
//         if (k === index--) {
//             return head
//         }
//         head = head.next
//     }
// }

var getKthFromEnd = function (head, k) {
  let fast = head
  let slow = head
  while (fast) {
    if (k <= 0) {
      slow = slow.next
    }
    fast = fast.next
    k--
  }
  return slow
}