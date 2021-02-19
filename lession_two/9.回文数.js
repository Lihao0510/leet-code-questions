/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  var num_str = new String(x);
  var stack = [];
  for (let i = 0; i < num_str.length; i++) {
    var num = num_str.charAt(i);
    if (i < (num_str.length - 1) / 2) {
      stack.push(num);
    } else if (i > (num_str.length - 1) / 2) {
      if (stack.pop() !== num) {
        return false;
      }
    } else {
      continue
    }
  }
  return stack.length === 0;
};
// @lc code=end

var num = 121;

var result = isPalindrome(num);

console.log('是否是回文数 ==>', result);
