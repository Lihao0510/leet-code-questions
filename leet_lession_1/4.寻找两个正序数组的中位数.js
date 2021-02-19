/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  /*
  思路:
  由于两个数组都是正序的, 所以将较小的数组插入到较大数组中, 由于按顺序插入, 所以每次插入, 只需要找到下一个
  数字比插入值大的作为插入点即可, 这样时间复杂度仅为n(m > n) 插入完成后, 再找到中间的两个或一个数, 得到中位数
  为了降低时间复杂度, 会将数组改造成链表方便进行插入操作
  */

  // 构建链表节点
  function Node(val) {
    this.val = val;
    this.next = null;
  }
  // 找到较长的数组, 做为基础数组
  var largerNums = nums1.length >= nums2.length ? nums1 : nums2;
  var smallerNums = nums1.length < nums2.length ? nums1 : nums2;
  // 构造链表, 方便进行插入操作
  var startNode = new Node(largerNums[0]);
  var currentIndex = startNode;
  for (var i = 1; i < largerNums.length; i++) {
    currentIndex.next = new Node(largerNums[i]);
    currentIndex = currentIndex.next;
  }
  // 将链表指针重新指向头部
  currentIndex = startNode;
  // 遍历较短的数组, 将短数组插入长数组中
  for (var j = 0; j < smallerNums.length; j++) {
    waitInsertNum = smallerNums[j];
    // 在长数组中找到插入点
    while (currentIndex.next) {
      // 找到合适的插入位置
      if (
        currentIndex.val <= waitInsertNum &&
        currentIndex.next.val > waitInsertNum
      ) {
        var insertPointIndex = currentIndex.next;
        currentIndex.next = new Node(waitInsertNum);
        currentIndex = currentIndex.next;
        currentIndex.next = insertPointIndex;
        break;
      } else if (waitInsertNum < currentIndex.val) {
        var createdNode = new Node(waitInsertNum);
        createdNode.next = currentIndex;
        currentIndex = createdNode;
        startNode = currentIndex;
        break;
      } else {
        currentIndex = currentIndex.next;
      }
    }
    // 如果链表到末尾了, 还没有插入完, 则剩余的所有数字应该插入到链表之后
    if (!currentIndex.next) {
      currentIndex.next = new Node(waitInsertNum);
      currentIndex = currentIndex.next;
    }
  }
  currentIndex = startNode;
  var resultArray = [];
  while (currentIndex) {
    resultArray.push(currentIndex.val);
    currentIndex = currentIndex.next;
  }
  console.log("结果数组 ==>", resultArray);
  if (resultArray.length % 2 === 0) {
    return (
      (resultArray[resultArray.length / 2 - 1] +
        resultArray[resultArray.length / 2]) /
      2
    );
  } else {
    return resultArray[(resultArray.length - 1) / 2];
  }
};
// @lc code=end

var nums1 = [1, 2];
var nums2 = [3, 4];

var result = findMedianSortedArrays(nums1, nums2);
console.log("计算结果 ==>", result);
