/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  var maxArea = 0;
  if (matrix.length === 0) {
    return maxArea;
  }
  var width = matrix.length;
  var height = matrix[0].length;
  for (var row = 0; row < width; row++) {
    for (var column = 0; column < height; column++) {
      matrix[row][column] = parseInt(matrix[row][column]);
      if (row > 0 && column > 0 && matrix[row][column] === 1) {
        matrix[row][column] = Math.min(matrix[row - 1][column - 1], matrix[row - 1][column], matrix[row][column - 1]) + 1;
      }
      if (matrix[row][column] > maxArea) {
        maxArea = matrix[row][column];
      }
    }
  }
  console.table(matrix);
  return maxArea * maxArea;
};
// @lc code=end

const result = maximalSquare([
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
]);

console.log('结果 ==>', result);
