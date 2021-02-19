/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
  // 将气球进行排序, 结束点靠近右边的排在前面 nlogn + n2
  points.sort((a, b) => {
    return a[1] - b[1];
  })
  console.log('排序后的气球 ==>', points);
  // 当前没有气球没被射中时, 结束循环
  var arrowCount = 0;
  while (points.length > 0) {
    arrowPosition = points[0][1];
    var isEnd = true;
    for (var index = 0; index < points.length; index ++) {
      console.log('正在判断 ==>', points[index]);
      // 找到第一个没被箭射中的, 它前面的那些气球应该都被射中了
      if (points[index][0] > arrowPosition) {
        points.splice(0, index);
        arrowCount++;
        isEnd = false;
        break;
      }
    }
    if (isEnd) {
      arrowCount++
      points = [];
    }
  }
  return arrowCount;
};
// @lc code=end


var findMinArrowShotsPro = function(points) {
  if (points.length === 0) {
    return 0;
  }
  // 将气球进行排序, 结束点靠近右边的排在前面 nlogn + n2
  points.sort((a, b) => {
    return a[1] - b[1];
  })
  console.log('排序后的气球 ==>', points);
  var position = points[0][1];
  var arrowCount = 1;
  for (var i = 0; i < points.length; i++) {
    if(points[i][0] > position) {
      position = points[i][1];
      arrowCount ++;
    }
  }
  return arrowCount;
};

// 测试用例
var airBalls = [[1, 5], [1, 4], [2, 5], [3, 6], [5, 7], [3, 5]];
var result = findMinArrowShots(airBalls);
console.log('最少数量 ==>', result);
