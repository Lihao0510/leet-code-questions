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
  //考虑链表为空的几种情况
  if (!l1 && !l2) {
    return null;
  }
  if (!l1 && l2) {
    return l2;
  }
  if (l1 && !l2) {
    return l1;
  }
  /*
  * 思路:两个链表各由两个指针进行维护
  * 判断两个指针的指向元素,小的加入新的链表,并将该指针后移一位
  * 直到有一个指针指向null,比较结束
  * 将不为null的指针指向部分直接添加到结果后面即可
  * */
  //定义四个指针,分别指向结果的头指针,结果当前节点,l1遍历节点,l2遍历节点
  var resultStart, resultCurrent, l1Current, l2Current;
  l1Current = l1;
  l2Current = l2;
  while (!!l1Current && !!l2Current) {
    //如果结果的头结点为空,那么初始化头结点为l1/l2的较小值
    if (!resultStart) {
      if (l1.val <= l2.val) {
        resultStart = l1;
        l1Current = l1Current.next
      } else {
        resultStart = l2;
        l2Current = l2Current.next
      }
      resultCurrent = resultStart;
      continue;
    }
    //比较l1 l2的值的大小,将较小的赋值给结果,并将指针指向较小的下个节点
    if (l1Current.val <= l2Current.val) {
      resultCurrent.next = l1Current;
      l1Current = l1Current.next;
    } else {
      resultCurrent.next = l2Current;
      l2Current = l2Current.next;
    }
    resultCurrent = resultCurrent.next;
  }
  //循环完成,将l1与l2的剩余部分添加到结果中;
  if (l1Current) {
    resultCurrent.next = l1Current;
  } if (l2Current) {
    resultCurrent.next = l2Current;
  }
  return resultStart;
};

var l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(7);

var l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
l2.next.next.next = new ListNode(5);

var result = mergeTwoLists(l1, l2);
console.log(result);
