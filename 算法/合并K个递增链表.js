/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// var mergeKLists = function(lists) {
//     let res = new ListNode(0)
//     let resP = res
//     let flag = 0
//     lists = lists.filter(item => {
//         return item !== null
//     })
//      while(lists.length > 0) {
//         let selectIndex = 0
//         let minP = lists[selectIndex]
//          for (let index = 1 ; index < lists.length ; index++) {
//              if (lists[index].val < minP.val) {
//                  minP = lists[index]
//                  selectIndex = index
//              }
//           }
//           resP.next = lists[selectIndex]
//           resP = resP.next
//           lists[selectIndex] = lists[selectIndex].next
//           lists = lists.filter(item => {
//              return item !== null
//           })
//      }
//      return res.next
// };

const mergeTwoLists = (n1, n2) => {

  let res = new ListNode(0) //创建虚拟节点
  let p = res // res 指针
  let p1 = n1 // L1 指针
  let p2 = n2 // L2指针

  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1 // p指针指向 p1
      p1 = p1.next // L1指针右移
    } else {
      p.next = p2 // p指针指向 p2
      p2 = p2.next // L2指针右移
    }
    p = p.next // p 的指针右移
  }
  p.next = p1 ? p1 : p2 // 当前有一个链表已合并历完， p next 指针直接指向未合并的剩余链表的下一个元素


  return res.next
}


var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return new ListNode(null).next
  }
  let res = lists.pop()
  while (lists.length) {
    const l2 = lists.pop()
    res = mergeTwoLists(res, l2)
  }

  return res
}