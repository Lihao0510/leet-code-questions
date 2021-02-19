/*
 * @lc app=leetcode.cn id=7 lang=javascript
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if (x === 0) {
    return x;
  }

  // 2147483648
  if (x > Math.pow(2, 31) - 1 || x < -Math.pow(2, 31)) {
    return 0;
  }
  // 负数标记
  var isNegative = x < 0;
  // 将x转为正整数
  x = x * (isNegative ? -1 : 1) + '';

  var numArr = [];
  var hasNoneZero = false;
  for (var index = x.length - 1; index >= 0; index --) {
    var number = x.charAt(index);
    if (number !== '0' && !hasNoneZero) {
      hasNoneZero = true;
    }
    if (number === '0' && !hasNoneZero) {
      continue;
    }
    numArr.push(number);
  }
  var newNumber = parseInt(numArr.join(''));
  if (newNumber > Math.pow(2, 31) - 1) {
    return 0;
  }
  return newNumber * (isNegative ? -1 : 1);
};
// @lc code=end

// 示例解法
var reverse = function(x) {
  let result = 0;
  while(x !== 0) {
      result = result * 10 + x % 10;
      x = (x / 10) | 0;
  }
  return (result | 0) === result ? result : 0;
};
