/**
 * 设计一个算法，算出 n 阶乘有多少个尾随零。
 * @param {number} n
 * @return {number}
 */

var trailingZeroes = function(n) {
  num = 0;
  while (n > 0) {
      n = Math.floor(n / 5);
      num += n;
  }
  return num;
};

var trailingZeroes = function (n) {
  var time = Math.floor(n / 10) * 2;
  var other = n % 10;
  if (other >= 5) {
    time += 1;
  }
  return time;
};

var stepMultiple = function (n) {
  var result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  return result;
};
