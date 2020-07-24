/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 创建一个数组, 用来保存当前的遍历字符串
  var tempCharArray = [];
  // 当前的最长字符串长度
  var currentMaxLength = 0;

  var startIndex = 0;
  while (startIndex < s.length) {
    for (var index = startIndex; index < s.length; index++) {
      var currentChar = s.charAt(index);
      var existIndex = tempCharArray.indexOf(currentChar);
      if (existIndex === -1) {
        tempCharArray.push(currentChar);
      } else {
        currentMaxLength = Math.max(tempCharArray.length, currentMaxLength);
        tempCharArray = [];
        startIndex = existIndex + startIndex + 1;
        break;
      }
      if (index === s.length - 1) {
        startIndex = s.length;
      }
    }
  }
  return Math.max(currentMaxLength, tempCharArray.length);
};
// @lc code=end

// 测试用例
var length = lengthOfLongestSubstring('abcabcbb');
console.log('最大子串长度 ==>', length);
