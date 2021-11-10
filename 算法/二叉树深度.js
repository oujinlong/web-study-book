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

var getNodeHeight = function (root) {
  if (root === null) return 0
  return Math.max(getNodeHeight(root.left), getNodeHeight(root.right)) + 1
}

var maxDepth = function (root) {
  return getNodeHeight(root)
};

console.log(maxDepth(root))