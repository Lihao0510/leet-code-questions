/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
示例：
输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */
var addTwoNumbers = function (l1, l2) {
  /*
  思路: 模拟加法, 逢10进位;
  */
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  var startNode = null; // 结果的链表入口
  var currentNode = null; // 结果当前链表节点, 指向最新的结果
  while(l1 && l2) {
    calcResult = l1.val + l2.val; // 计算两个链表相同位置节点的计算结果
    var lastRemain = 0; // 计算后将进位数置为0
    // 计算结果大于10时, 需要保留个位数, 同时进位
    if (calcResult > 9) {
      calcResult = calcResult % 10;
      lastRemain = 1;
    }
    // 创建新的节点
    var node = new ListNode(calcResult);
    // 将新的节点插入至结果列表中
    if (!startNode) {
      currentNode = startNode = node;
    } else {
      currentNode.next = node;
      currentNode = currentNode.next;
    }
    // 指向新的数组
    l1 = l1.next;
    l2 = l2.next;
    // 当留有进位时, 将进位补充至下次遍历的节点中, 分为4中情况
    if (lastRemain) {
      if (!l1 && !l2) {
        currentNode.next = new ListNode(lastRemain);
      } else if (!l1 && l2) {
        l1 = new ListNode(lastRemain);
      } else if (!l2 && l1) {
        l2 = new ListNode(lastRemain);
      } else {
        l1.val += lastRemain;
      }
    }
  }

  var remainList = l1 || l2;
  if (!remainList) {
    return startNode;
  }
  // 接上剩余的列表
  currentNode.next = remainList;

  return startNode;
};
// @lc code=end

// 原计算法:
var addTwoNumbers = function (l1, l2) {
  /*
  思路: 将链表转换为数字, 进行数字相加, 在转换为链表(超出2^32的数字计算失败)
  */
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  var number1 = "",
    number2 = "";
  while (l1) {
    number1 = l1.val + number1;
    l1 = l1.next;
  }
  while (l2) {
    number2 = l2.val + number2;
    l2 = l2.next;
  }
  var result = parseInt(number1) + parseInt(number2);
  console.log("计算结果 ==>", result);
  var startNode = null,
    currentNode = null;
  var currentNode = node;
  if (result === 0) {
    return new ListNode(0);
  }
  while (result !== 0) {
    var node = new ListNode(result % 10);
    if (!startNode) {
      startNode = node;
      currentNode = startNode;
    } else {
      currentNode.next = node;
      currentNode = currentNode.next;
    }
    result = Math.floor(result / 10);
  }
  return startNode;
};
