//https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
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
  let temp = new ListNode(0)
  temp.next = head
  let firstPre = temp
  let isDeleteFirst = false
  do {
    console.log(firstPre)
    const first = firstPre ? firstPre.next : p
    if (first === null) {
      break
    }
    const next = first.next
    if (next && first.val === next.val) {
      // 删除 next, 标记 first
      isDeleteFirst = true
      first.next = next.next
      continue
    } else {
      if (isDeleteFirst) {
        firstPre.next = first.next
        isDeleteFirst = false
      } else {
        firstPre ? firstPre = firstPre.next : firstPre = head
      }
    }
  } while (firstPre)
  return temp.next
};