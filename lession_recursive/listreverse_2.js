/**
 * 反转一个单链表。
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function (head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    var temp = head;
    var result = null;
    while (!!temp.next && !!temp.next.next) {
        temp = temp.next;
        result = temp.next;
    }
    if (!!temp.next && !temp.next.next) {
        result = temp.next;
        temp.next = null;
    }
    temp.next = null;
    result.next = reverseList(head);
    return result;
};

var head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

var result = reverseList(head);

console.log(result);
