/**
 * 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
 * 如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
  try {
    var height = _getHeight(root);
    console.log('height ==>', height);
    return true;
  } catch(e) {
    return false
  }
};

function _getHeight(node) {
  if (!node) {
    return 0;
  }
  const leftHeight = _getHeight(node.left);
  const rightHeight = _getHeight(node.right);
  if (Math.abs(leftHeight - rightHeight) > 1) {
    console.log('找到不平衡的节点了 ==>', leftHeight, rightHeight)
    throw new Error('找到不平衡的节点了!');
  }
  return Math.max(leftHeight, rightHeight) + 1;
}

