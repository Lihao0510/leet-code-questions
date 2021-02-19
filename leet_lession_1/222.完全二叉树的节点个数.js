/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodesBasic = function(root) {
  var nodeNum = 0;
  function printNode(node) {
    node.left && printNode(node.left);
    console.log('当前节点 ==>', node.val);
    nodeNum ++;
    node.right && printNode(node.right);
  }
  if (!root) return nodeNum;
  printNode(root);
  return nodeNum;
};
// @lc code=end

var countNodes = function(root) {
  if (!root) return 0;
  return countNodes(root.left) + countNodes(root.right) + 1;
};

var countNodes = function(root) {
  if (!root) return 0;
  function getHeight(treeNode) {
    if (!root) {
      return 0;
    }
    return 1 + Math.max(maxDepth(treeNode.left), maxDepth(treeNode.right));
  }

  var leftHeight = getHeight(root.left);
  var rightHeight = getHeight(root.right);
  if (leftHeight === rightHeight) {
    // 测试left树为完全树
    return Math.pow(2, leftHeight) + countNodes(root.right);
  } else {
    return Math.pow(2, rightHeight) + countNodesPro(root.left);
  }
};



