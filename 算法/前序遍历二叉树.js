function TreeCode() {
  let NodeTree = function (ele) {
    this.val = ele;
    this.left = null;
    this.right = null;
  }

  this.createTree = function () {
    let tree = new NodeTree('A');
    tree.left = new NodeTree('B');
    tree.right = new NodeTree('C');
    tree.left.left = new NodeTree('D');
    tree.left.left.left = new NodeTree('G');
    tree.left.left.right = new NodeTree('H');
    tree.right.left = new NodeTree('E');
    tree.right.right = new NodeTree('F');
    tree.right.left.right = new NodeTree('I');
    return tree;
  }
}
let treeCode = new TreeCode();
let root = treeCode.createTree()

let stack = []
let res = []
stack.push(root)
while (stack.length) {
  const node = stack.pop()
  res.push(node.val)
  node.right ? stack.push(node.right) : ''
  node.left ? stack.push(node.left) : ''
}
console.log(res)
