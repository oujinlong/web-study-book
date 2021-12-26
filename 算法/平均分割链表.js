// https://juejin.cn/post/7045986923659132959/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  let length = 0
  let p = head
  // 求出链表长度
  while (p) {
    length++
    p = p.next
  }
  // 求出每个分链表理论长度
  const count = parseInt(length / k)
  // 在前 more 个链表长度 中都要 + 1
  const more = length % k
  // 创建结果数组，长度  链表长度/为理论长度
  const res = new Array(parseInt(k)).fill(null)
  // 重新遍历链表
  p = head
  // 定义结果数组的下标
  let index = 0
  // 记录 链表加入的长度
  let addedLength = 0
  let cur = null
  while (p) {
    // 判断单个链表长度
    const l = index < more ? count + 1 : count
    if (addedLength === 0) {
      res[index] = new ListNode(p.val, null)
      cur = res[index]
    }
    addedLength++
    if (addedLength === l) {
      // 达到长度后切换下一个单链表
      addedLength = 0
      index++
      cur.next = null
    } else {
      cur.next = new ListNode(p.next.val, null)
      cur = cur.next
    }
    p = p.next

  }
  return res
};
