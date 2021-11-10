function TreeCode() {
  let NodeTree = function (ele) {
    this.val = ele;
    this.left = null;
    this.right = null;
  }

  this.createTree = function () {
    let tree = new NodeTree('3');
    tree.left = new NodeTree('9');
    tree.right = new NodeTree('20');
    tree.right.left = new NodeTree('15');
    tree.right.right = new NodeTree('7');
    return tree;
  }
}

// 创建二叉树数据结构，并且生成一个二叉树
let treeCode = new TreeCode();
let root = treeCode.createTree()

const getNodeHeight = (_root) => {
  if (_root === null) return 0
  return Math.max(getNodeHeight(_root.left), getNodeHeight(_root.right)) + 1
}
var isBalanced = function (root) {
  if (root === null) {
    return true
  }
  return (
    Math.abs(getNodeHeight(root.left) - getNodeHeight(root.right)) <= 1 &&
    isBalanced(root.left) &&
    isBalanced(root.right)
  )
};

console.log(isBalanced(root))