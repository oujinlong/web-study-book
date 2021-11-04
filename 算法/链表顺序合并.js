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

const f = (n1, n2) => {
  let res = new NodeList(0) //创建虚拟节点
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

let node1 = new NodeList(1)
node1.append(2)
node1.append(6)
node1.append(8)


let node2 = new NodeList(3)
node2.append(4)
node2.append(5)
node2.append(9)

node1.print()
node2.print()
const res = f(node1, node2)
res.print()