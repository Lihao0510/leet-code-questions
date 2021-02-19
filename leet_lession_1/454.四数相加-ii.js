/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  // 分组 + hash
  var E = {},
    count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      hashKey = A[i] + B[j] + "";
      if (E[hashKey]) {
        E[hashKey]++;
      } else {
        E[hashKey] = 1;
      }
    }
  }
  for (var k = 0; k < C.length; k++) {
    for (var l = 0; l < D.length; l++) {
      hashKey = 0 - (C[k] + D[l]) + '';
      if (E[hashKey]) {
        count += E[hashKey]
      }
    }
  }
  return count;
};
// @lc code=end

var fourSumCountRubbish = function (A, B, C, D) {
  var count = 0;
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < B.length; j++) {
      for (var k = 0; k < C.length; k++) {
        for (var l = 0; l < D.length; l++) {
          if (A[i] + B[j] + C[k] + D[l] === 0) {
            count++;
          }
        }
      }
    }
  }
  return count;
};
