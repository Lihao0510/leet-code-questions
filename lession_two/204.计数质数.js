/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n < 2) {
    return 0;
  }
  var count = 0;
  for (var i = 2; i < n; i++) {
    if (i % 2 === 0 && i !== 2) {
      continue;
    } else {
      count += judgePrime(i);
    }
  }
  return count;
};

function judgePrime(number) {
  for (var i = 2; i * i < number; i++) {
    if (number % i === 0) {
      return 0;
    }
  }
  return 1;
}
// @lc code=end
