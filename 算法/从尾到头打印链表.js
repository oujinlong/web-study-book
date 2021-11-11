/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  // let current = head
  // let pre = null
  // while(current) {
  //     const next = current.next
  //     current.next = pre
  //     pre = current
  //     current = next
  // }
  // const res = []
  // while(pre) {
  //   res.push(pre.val)
  //   pre = pre.next
  // }
  // return res
  let res = []
  let p = head
  while (p) {
    res.push(p.val)
    p = p.next
  }
  let left = 0
  let right = res.length - 1
  while (left < right) {
    let temp = res[left]
    res[left] = res[right]
    res[right] = temp
    left++
    right--
  }
  return res
};