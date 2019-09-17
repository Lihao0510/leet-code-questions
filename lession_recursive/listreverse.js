/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var swapPairs = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }

    var nextNode = swapPairs(head.next && head.next.next);

    var tempNode = head.next;

    tempNode.next = head;

    head.next = nextNode;

    return tempNode;
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

var result = swapPairs(head);

console.log(result);
