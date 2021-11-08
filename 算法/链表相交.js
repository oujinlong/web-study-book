/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
// leetcode： https://leetcode-cn.com/problems/intersection-of-two-linked-lists-lcci/solution/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA
  let pB = headB
  if (pA === null || pB === null) {
    return null
  }
  while (pA !== pB) {
    // 将此处作修改
    pA = pA === null ? headB : pA.next
    pB = pB === null ? headA : pB.next
  }

  return pB
};