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
node1.append(6)
node1.append(8)

const f = (head) => {
  let cur = head
  let pre = null
  while (cur) {
    const next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return pre
}
console.log(`翻转前:`)
node1.print()
console.log(`翻转后:`)
f(node1).print()