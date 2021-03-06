/**
 * @param {TreeNode} root
 * @return {TreeNode}
 * @requires 翻转一棵二叉树。
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var invertTree = function (root) {
  /*
  * 思路:递归翻转
  * 如果一个节点的左右节点都不为null
  * 则可以递归进行翻转
  * */
  //root为空,直接返回空
  if (!root) {
    return null;
  }
  //左右子树不全为空的情况
  if (root.left || root.right) {
    var temp = invertTree(root.right);
    root.right = invertTree(root.left);
    root.left = temp;
  }
  return root;
};

//测试用例
/*var nodes = [
  new TreeNode(3),
  new TreeNode(9),
  new TreeNode(20),
  new TreeNode(15),
  new TreeNode(7),
  new TreeNode(1),
];

nodes[0].left = nodes[1];
nodes[0].right = nodes[2];
nodes[2].left = nodes[3];
nodes[2].right = nodes[4];
nodes[3].right = nodes[5];*/

var nodes = [
  new TreeNode(3),
  new TreeNode(2),
  new TreeNode(1)
];

nodes[0].left = nodes[1];
nodes[0].right = nodes[2];

console.log('原本的tree ==>', nodes[0]);
invertTree(nodes[0]);
console.log('翻转后的tree ==>', nodes[0]);

