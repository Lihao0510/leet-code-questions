/**
 * @param {number} n
 * @return {TreeNode[]}
 * @requires 给定一个整数 n，生成所有由 1 ... n 为节点所组成的二叉搜索树。
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var generateTrees = function(n) {
  /*
  * 思路:
  * 1.输入为n,找到所有n的排序可能;
  * 2.设计一个生成二叉搜索树的方法;
  * 3.将全部n的排序可能分别生成二叉搜索树;
  * 4.过滤结果集并返回;
  * */
  if (n < 1) {
    return [];
  }

  result = [];

  //获取所有可能的搜索集,使用全排列方法
  var getAllPossibleResult = function (n) {
    var numbers = [];
    for (var index = 1; index <= n; index++) {
      numbers.push(index);
    }

    //执行全排列
    function fullpermutate(str) {
      var result = [];
      if (str.length > 1) {
        //遍历每一项
        for (var m = 0; m < str.length; m++) {
          //拿到当前的元素
          var left = str[m];
          //除当前元素的其他元素组合
          var rest = str.slice(0, m).concat(str.slice(m + 1));
          //上一次递归返回的全排列
          var preResult = fullpermutate(rest);
          //组合在一起
          for (var i = 0; i < preResult.length; i++) {
            var tmp = [left].concat(preResult[i]);
            result.push(tmp);
          }
        }
      } else if (str.length === 1) {
        result.push(str);
      }
      return result;
    }

    return fullpermutate(numbers);
  };

  //判断构造二叉树的终止条件
  var continueLoop = function (number, treeNode) {
    //要插入的值小于等于当前节点的值,如果当前节点左子树为空,终止循环
    if (number <= treeNode.val) {
      return !!treeNode.left;
    } else {
      //要插入的值大于当前节点的值,如果当前节点右子树为空,终止循环
      return !!treeNode.right;
    }
  };

  //循环构造二叉树,返回二叉树的头结点
  var buildBinaryTree = function (numbers) {
    //初始化头部节点
    var rootNode = new TreeNode(numbers[0]);
    for(var index = 1; index < numbers.length; index++) {
      //每次添加新值,从rootNode开始添加,指针指向rootNode
      var treeCursor = rootNode;
      var targetNumber = numbers[index];
      //循环终止条件用函数判断
      while (continueLoop(targetNumber, treeCursor)) {
        //根据比较结果移动指针
        if (targetNumber <= treeCursor.val) {
          treeCursor = treeCursor.left;
        } else {
          treeCursor = treeCursor.right;
        }
      }
      //将新的值添加到树上
      if (targetNumber <= treeCursor.val) {
        treeCursor.left = new TreeNode(targetNumber);
      } else {
        treeCursor.right = new TreeNode(targetNumber);
      }
    }
    //返回头部节点
    return rootNode;
  };

  //检查是否有重复的树
  var filterRepeat = function (originArr) {

  };

  var possibleSearchResult = getAllPossibleResult(n);

  for (var index = 0; index < possibleSearchResult.length; index++) {
    result.push(buildBinaryTree(possibleSearchResult[index]));
  }

  return result;
};

//测试用例
var result = generateTrees(3);
console.log(result);
