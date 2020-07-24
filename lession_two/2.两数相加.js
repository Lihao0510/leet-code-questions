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
  思路: 将链表转换为数字, 进行数字相加, 在转换为链表
  */
  function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  var number1 = 0,
    number2 = 0,
    pos1 = 1,
    pos2 = 1;
  while (l1) {
    number1 += l1.val * pos1;
    pos1 *= 10;
    l1 = l1.next;
  }
  while (l2) {
    number2 += l2.val * pos2;
    pos2 *= 10;
    l2 = l2.next;
  }
  var result = number1 + number2;
  console.log('计算结果 ==>', result);
  var startNode = null, currentNode = null;
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
    result = (result / 10) | 0;
  }
  return startNode;
};
// @lc code=end
