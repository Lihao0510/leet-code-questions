/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  if (nums.length < 2) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  var maxDistance = 0;
  for (var index = 0; index < nums.length - 1; index++) {
    var distance = Math.abs(nums[index + 1] - nums[index]);
    if (distance > maxDistance) {
      maxDistance = distance;
    }
  }
  return maxDistance;
};
// @lc code=end

var maxDistance = maximumGap([1, 3, 100]);
console.log("最大间距为 ==>", maxDistance);
