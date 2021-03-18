/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  /*
  先找到要翻转的头结点
  找到头结点前的指针
  头结点入栈,
  入栈前找到next的指针并保存下来
  每次节点入栈时, 都要把该节点的next设置为null
  一直入栈right - left + 1个节点
  依次出栈, 连接到头结点前的指针
  直到全部出栈完毕
  将最后一个元素的next连接到最后一个位置
  */
  // 如果左侧节点大于等于右侧节点的位置, 直接返回head
  if (left >= right) {
    return head;
  }
  // 只有一个节点时, 也直接返回head
  if (!head || !head.next) {
    return head;
  }
  // 用来保存节点的栈
  var stack = [];
  // 保存左侧的上一个, 右侧的下一个
  var prevLeftPointer = null, afterRightPointer = null, current = null;
  for (var index = 1; index <= left; index++) {
    if (index === 1) {
      current = head;
    } else {
      prevLeftPointer = current;
      current = current.next;
    }
  }
  // 进行完此次遍历后, current即为left对应的节点, prevLeftPointer为left之前的节点
  // 将制定数目的节点推入栈中
  for (var index = 0; index <= right - left; index++) {
    afterRightPointer = current.next;
    current.next = null;
    stack.push(current);
    current = afterRightPointer;
  }
  // 进行完此次遍历后, afterRightPointer为right后的节点
  // 将数组中的元素依次出栈, 连接到左侧的节点中
  while (stack.length > 0) {
    popedElement = stack.pop();
    if (!prevLeftPointer) {
      prevLeftPointer = popedElement;
      head = prevLeftPointer;
      if (stack.length > 0) {
        prevLeftPointer.next = stack.pop();
      }
    } else {
      prevLeftPointer.next = popedElement;
    }
    prevLeftPointer = prevLeftPointer.next;
  }
  // 全部出栈完毕后, 将左侧和右侧连接起来
  prevLeftPointer.next = afterRightPointer;
  // 返回反转后的头结点
  return head;
};
// @lc code=end

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/* var node1 = new ListNode(1);
var node2 = new ListNode(2);
var node3 = new ListNode(3);
var node4 = new ListNode(4);
var node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

var result = reverseBetween(node1, 2, 4); */

var node1 = new ListNode(3);
var node2 = new ListNode(5);
node1.next = node2;
var result = reverseBetween(node1, 1, 2);

console.log('反转后的链表 ==>', result);
