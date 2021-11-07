function TreeCode() {
  let NodeTree = function (ele) {
    this.val = ele;
    this.left = null;
    this.right = null;
  }

  this.createTree = function () {
    let tree = new NodeTree('4');
    tree.left = new NodeTree('2');
    tree.right = new NodeTree('7');
    tree.left.left = new NodeTree('D');
    tree.left.left.left = new NodeTree('G');
    tree.left.left.right = new NodeTree('H');
    tree.right.left = new NodeTree('E');
    tree.right.right = new NodeTree('F');
    tree.right.left.right = new NodeTree('I');
    return tree;
  }
}

// 创建二叉树数据结构，并且生成一个二叉树
let treeCode = new TreeCode();
let root = treeCode.createTree()

// 翻转操作
const revertTree = (listNode) => {
  // 递归结束的条件： 即当前 node 作为 root时，没有左右节点。
  if (listNode === null) {
    return null
  }
  // 递归翻转子节点
  const right = revertTree(listNode.left)
  const left = revertTree(listNode.right)
  // 当前节点的交换
  listNode.left = left
  listNode.right = right

  // 返回结果
  return listNode
}

const s = revertTree(root)
console.log(s)