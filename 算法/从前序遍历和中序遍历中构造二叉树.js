//https://juejin.cn/post/7048930048660733960/
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null
  const res = new TreeNode(preorder[0])
  const rootIndex = inorder.indexOf(preorder[0])
  res.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
  res.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))
  return res
};
