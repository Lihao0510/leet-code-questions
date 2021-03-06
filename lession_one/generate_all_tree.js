/**
 * @param {number} n
 * @return {TreeNode[]}
 * @requires 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var generateTrees = function (n) {
  if (n <= 0) {
    return [];
  }
  if (n === 1) {
    return [new TreeNode(n)];
  }
  return buildSubTree(1, n);
};

/*
* 思路,由于二叉搜索树的左子树全部小于等于右子树
* 将原数组nums[n]分为两部分:
* 0 -> (i - 1) 为左子树,
* (i + 1) -< n 为右子树,
* 遍历所有的i,递归求左子树和右子树的全部可能
* 使用双循环组合结果,并返回
* */
var buildSubTree = function (start, end) {
  //start取值 > 1 end理论上 >= start
  //start = end时,应返回自身(一种情况)
  //start > end时,返回null(一种情况)
  if (start > end) {
    return [null];
  }
  //保存本次生成所有树的结果集
  var resultArr = [];
  //生成从1-n的所有结果
  for (var i = start; i <= end; i++) {
    //递归求左侧结果集
    var leftTreeArr = buildSubTree(start, i - 1);
    //递归求右侧结果集
    var rightTreeArr = buildSubTree(i + 1, end);
    //组合所有的结果,将结果push到结果集
    for (var leftIndex = 0; leftIndex < leftTreeArr.length; leftIndex++) {
      for (var rightIndex = 0; rightIndex < rightTreeArr.length; rightIndex++) {
        //新建根节点,值为i
        var root = new TreeNode(i);
        root.left = leftTreeArr[leftIndex];
        root.right = rightTreeArr[rightIndex];
        resultArr.push(root);
      }
    }
  }
  return resultArr;
};

//测试用例
//[1, 2, 3]
var result = generateTrees(3);
console.log(result);
