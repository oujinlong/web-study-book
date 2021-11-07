class NodeList {
  constructor(val) {
    this.val = val
    this.next = null
  }

  //添加链表的新增节点方法
  append(val) {
    let currnt = this
    let node = new NodeList(val)
    while (currnt.next) {
      currnt = currnt.next
    }
    currnt.next = node
  }

  // 打印
  print() {
    let current = this
    let res = []
    while (current) {
      res.push(current.val)
      current = current.next
    }
    console.log(res)
  }
}

let node1 = new NodeList(1)
node1.append(2)
node1.append(3)
node1.append(4)
node1.append(5)

const f = (list, k) => {
  // 计算 链表长度 n
  let n = 1;
  let current = list
  while (current.next) {
    current = current.next
    n++
  }

  // 计算和实际需要旋转次数同样效果的理论旋转次数
  let count = n - k % n
  // 如果 count === 0 ，那么实际上就和不需要旋转效果一致
  if (count === 0) {
    return list
  }
  // 链表首尾相接
  current.next = list


  // 找到旋转 count 次数后对应的理论 head 节点
  while (count) {
    current = current.next
    count--
  }

  // current 即为最终搜需要的链表最后一个节点，但是还是首尾相接的，所以 current.next 即为链表 head，再将 current.next = null 切断首尾相连
  const res = current.next
  current.next = null

  return res
}

const res = f(node1, 6)
res.print()