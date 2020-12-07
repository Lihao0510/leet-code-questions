/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  var startIndex = 0,
    endIndex = nums.length - 1,
    currentIndex = Math.floor((endIndex - startIndex) / 2);
  var targetIndex = -1;
  while (startIndex <= endIndex) {
    console.log('二分查找中 ==>', startIndex, endIndex);
    if (nums[currentIndex] > target) {
      endIndex = currentIndex - 1;
      currentIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    } else if (nums[currentIndex] < target) {
      startIndex = currentIndex + 1;
      currentIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    } else {
      targetIndex = currentIndex;
      break;
    }
  }
  if (targetIndex === -1) {
    return [-1, -1];
  } else {
    console.log('查找到的位置 ==>', targetIndex);
    var isPrevPending = true,
      isNextPending = true;
    var prevIndex = targetIndex,
      nextIndex = targetIndex;
    while (isPrevPending) {
      prevIndex--;
      if (nums[prevIndex] !== nums[targetIndex]) {
        isPrevPending = false;
        prevIndex++;
      }
    }
    while (isNextPending) {
      nextIndex++;
      if (nums[nextIndex] !== nums[targetIndex]) {
        isNextPending = false;
        nextIndex--;
      }
    }
    return [prevIndex, nextIndex];
  }
};
// @lc code=end

var nums = [1];
var target = 1;
var result = searchRange(nums, target);
console.log("结果 ==>", result);
