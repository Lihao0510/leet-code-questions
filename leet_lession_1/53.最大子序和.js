/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if (nums.length < 1) {
    return 0
  }
  var maxSum = nums[0];
  var currentSum = 0;
  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(currentSum + nums[i], nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
};
// @lc code=end

var maxSubArray2 = function(nums) {
  if (nums.length < 1) {
    return 0
  }
  var currentSum = 0, maxSum = nums[0];
  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

var nums = [2, 1, -3, 4, -2, 1, 5];

var result = maxSubArray(nums);

console.log('最大子数组的和 ==>', result);
