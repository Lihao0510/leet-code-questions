/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var head = new ListNode(6);
head.next = new ListNode(3);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);
head.next.next.next.next = new ListNode(4);

deleteNode()
