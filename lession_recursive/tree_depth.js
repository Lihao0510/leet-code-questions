/**
 * @param {TreeNode} root
 * @return {number}
 * @requires 给定一个二叉树，找出其最大深度。
 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 说明: 叶子节点是指没有子节点的节点。
 */

//二叉树节点的定义
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    /*
    * 思路:求二叉树的高度,应该为求左侧高度和右侧高度的最大值 + 1
    * 左侧高度和右侧高度使用递归求解,知道左右侧都为null为止
    * */
    var rightHeight, leftHeight;
    leftHeight = maxDepth(root.left);
    rightHeight = maxDepth(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
};

//测试用例
var nodes = [
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
nodes[3].right = nodes[5];

var result = maxDepth(nodes[0]);

console.log(result);
