//https://juejin.cn/post/7034212052352630821/
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
// var swapPairs = function(head) {
//     let p = head
//     let index = 0
//     while(p) {
//         if(index % 2 === 0 && p.next) {
//             let val = p.val
//             p.val = p.next.val
//             p.next.val = val
//         }
//         index++
//         p = p.next
//     }
//     return head
// };

var swapPairs = function (head) {
  let tempNode = new ListNode(0)
  tempNode.next = head
  let temp = tempNode
  while (temp.next && temp.next.next) {
    let node1 = temp.next
    let node2 = temp.next.next
    temp.next = node2
    node1.next = node2.next
    node2.next = node1
    temp = node1
  }
  return tempNode.next
};