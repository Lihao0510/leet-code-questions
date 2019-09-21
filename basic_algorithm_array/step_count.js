/**
 * @param {number} n
 * @return {number}
 * @requires 有个台阶,每次走两步剩一个台阶
 * 走3部剩两个,走5步剩四个,走六步剩五个
 * 求台阶数(最多20000个)
 */

var stepCount = function (n) {
  for (var i = 6; i <= n; i ++) {
    if ((i % 2 === 1) && (i % 3 === 2) && (i % 5 === 4) && (i % 6 === 5)) {
      return i;
    }
  }
};

console.log(stepCount(20000));
