/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
说明: 叶子节点是指没有子节点的节点。
示例: 
给定如下二叉树，以及目标和 sum = 22，
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  // 构造两个队列, 一个队列用于存放当前未遍历的节点头部
  var nodeDequeue = [root];
  // 另一个用来存放目标的和
  var sumDequeue = [root.val];

  while (nodeDequeue.length > 0) {
    // 存放未遍历节点的队列出队一个
    var currentNode = nodeDequeue.shift();
    var tempVal = sumDequeue.shift();
    // 当前节点为根节点时, 判断当前目标的和
    if (!currentNode.left && !currentNode.right) {
      if(sum === tempVal) {
        return true;
      }
    }
    // 存在左子节点时, 将左子节点加入未遍历队列
    if (currentNode.left) {
      nodeDequeue.push(currentNode.left);
      // 路径和队列加入当前遍历的路径和
      sumDequeue.push(tempVal + currentNode.left.val);
    }
    // 存在右子节点时, 将右子节点加入未遍历队列
    if (currentNode.right) {
      nodeDequeue.push(currentNode.right);
      // 路径和队列加入当前遍历的路径和
      sumDequeue.push(tempVal + currentNode.right.val);
    }
  }
  // 遍历完成后, 如果没有返回成功, 则说明没有指定的路径, 返回false
  return false;
};

//二叉树节点的定义
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

//测试用例
var nodes = [
  new TreeNode(5),
  new TreeNode(4),
  new TreeNode(8),
  new TreeNode(11),
  new TreeNode(13),
  new TreeNode(4),
  new TreeNode(7),
  new TreeNode(2),
  new TreeNode(1),
];

nodes[0].left = nodes[1];
nodes[0].right = nodes[2];
nodes[1].left = nodes[3];
nodes[2].left = nodes[3];
nodes[2].right = nodes[4];
nodes[3].left = nodes[6];
nodes[3].right = nodes[7];
nodes[5].right = nodes[8];

var result = hasPathSum(nodes[0], 22);

console.log('是否存在符合的路径 ==>', result);
