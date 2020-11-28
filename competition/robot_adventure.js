/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function (command, obstacles, x, y) {
  var curX = 0,
    curY = 0;
  var route = { '00': true };
  for (var i = 0; i < command.length; i++) {
    if (command.charAt(i) === "R") {
      route[++curX + "" + curY] = true;
    } else {
      route[curX + "" + ++curY] = true;
    }
  }

  var cycleTime = Math.min(Math.floor(y / curY), Math.floor(x / curX));
  var targetVirtualY = y - curY * cycleTime;
  var targetVirtualX = x - curX * cycleTime;
  if (!route[x + "" + y] && !route[targetVirtualX + "" + targetVirtualY]) {
    return false;
  }
  console.log("终点在路径上 ==>", route, targetVirtualX, targetVirtualY);
  for (var i = 0; i < obstacles.length; i++) {
    if (obstacles[i][0] > x || obstacles[i][1] > y) {
      continue;
    }
    if (route[obstacles[i][0] + '' + obstacles[i][1]]) {
      return false;
    }

    var cycleTime = Math.min(Math.floor(obstacles[i][0] / curX) , Math.floor(obstacles[i][1] / curY));

    var obstaclesVirtualY = obstacles[i][1] - curY * cycleTime;
    var obstaclesVirtualX = obstacles[i][0] - curX * cycleTime;
    if (route[obstaclesVirtualX + "" + obstaclesVirtualY]) {
      return false;
    }
  }
  return true;
};

//测试用例
var result = robot(
  "RRU",
  [
    [5, 5],
    [9, 4],
    [9, 7],
    [6, 4],
    [7, 0],
    [9, 5],
    [10, 7],
    [1, 1],
    [7, 5],
  ],
  1486,
  743
);
console.log(result);
