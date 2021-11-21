const reverse = (a, b) => {
  let pre, cur, nxt;
  cur = a;
  while (cur != b) {
    nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }
  return pre;
};
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (head == null) {
    return head;
  }
  let a = head,
    b = head;
  for (let i = 0; i < k; i++) {
    if (b == null) {
      return head;
    } else {
      b = b.next;
    }
  }
  let newHead = reverse(a, b);
  a.next = reverseKGroup(b, k);
  return newHead;
};

