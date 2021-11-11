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
 * @return {number}
 */
// var kthToLast = function(head, k) {
//     let indexList = []
//     let p = head
//     while(p) {
//         indexList.push(p.val)
//         p = p.next
//     }
//     return indexList[indexList.length - k]
// };

var kthToLast = function (head, k) {
  let pre = null
  let current = head
  while (current) {
    const next = current.next
    current.next = pre
    pre = current
    current = next
  }
  let n = 1
  let res = ''
  while (n <= k) {
    res = pre.val
    n++
    pre = pre.next
  }
  return res
}