/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 && l2) {
    return l2;
  }
  if (l1 && !l2) {
    return l1;
  }
  var resultList = new ListNode(l1.val);
  resultList.next = new ListNode(l2.val);
  var resultCursor = resultList.next;

  while (l1.next && l2.next) {
    resultCursor.next = new ListNode(l1.next);
    resultCursor = resultCursor.next;
    resultCursor.next = new ListNode(l2.next);
    resultCursor = resultCursor.next;
    l1 = l1.next;
    l2 = l2.next;
  }

  if (l1) {
    resultCursor.next = l1;
  }

  if (l2) {
    resultCursor.next = l2;
  }

  return resultList;
};

var l1 = new ListNode(1)
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

var l2 = new ListNode(4)
l2.next = new ListNode(5);
l2.next.next = new ListNode(6);
l2.next.next.next = new ListNode(7);

var result = mergeTwoLists(l1, l2);
console.log(result);
