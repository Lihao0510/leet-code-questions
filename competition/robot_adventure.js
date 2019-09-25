/**
 * @param {string} command
 * @param {number[][]} obstacles
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var robot = function(command, obstacles, x, y) {
  var commandChars = [];
  for (var i = 0; i < command.length; i++) {
    commandChars.push(command.charAt(i))
  }
  var curX =0, curY = 0;

  while (true) {

    for (var j = 0; j < commandChars.length; j++) {
      if (commandChars[j] === 'U') {
        curY++
      } else {
        curX++
      }

      if (curX === x && curY === y) {
        return true;
      }

      if (curX > x || curY > y) {
        return false;
      }

      for (var k = 0; k < obstacles.length; k++) {
        if (obstacles[k][0] === curX && obstacles[k][1] === curY) {
          return false;
        }
        if (obstacles[k][0] < curX ) {
          obstacles.splice(k, 1);
          continue;
        }
        if (obstacles[k][1] < curY ) {
          obstacles.splice(k, 1);
          continue;
        }
      }
    }
  }
};

//测试用例
var result = robot('URR', [[4, 2]], 3, 2);
console.log(result);
