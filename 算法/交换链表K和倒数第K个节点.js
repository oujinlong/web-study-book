var swapNodes = function (head, k) {
  let count = 1
  let p = head
  let front = null
  let back = head
  while (p) {
    if (count === k) {
      front = p
    }
    if (count > k) {
      back = back.next
    }
    p = p.next
    count++
  }
  let temp = front.val
  front.val = back.val
  back.val = temp

  return head
};