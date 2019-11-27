/**
 * @param {number} n
 * @return {string[][]}
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

var solveNQueens = function(n) {
  //来源于八皇后问题,使用的是回溯算法
  var result = [];
  var chessboard = [];
  for (var index = 0; index < n; index++) {
    var columns = [];
    for (var j = 0; j < n; j++) {
      columns.push(".");
    }
    chessboard.push(columns);
  }

  console.log("初始化棋盘完成 ==>", chessboard);

  //递归函数,逐行对皇后进行放置
  function dropQueen(currentRow) {
    var row = currentRow || 0;

    if (row > n) {
      result.push(chessboard);
      return;
    }

    for (var column = 0; column < n; column++) {
      if (row === 0) {
        chessboard[row][column] = "Q";
        dropQueen(row + 1);
        chessboard[row][column] = ".";
      } else {
        if (checkPosition(row, column)) {
          chessboard[row][column] = "Q";
          dropQueen(row + 1);
          chessboard[row][column] = ".";
        }
      }
    }
  }

  //检查在当前行/列上放置皇后是否合法
  function checkPosition(row, column) {
    console.log("正在执行检查 ==>", row, column, chessboard);
    //检查同一列上是否有皇后
    for (var i = 0; i < row; i++) {
      if (chessboard[i][column] === "Q") {
        return false;
      }
    }
    //检查左对角线上是否有皇后
    for (var j = column - 1; j >= 0; j--) {
      var curRow = row - (column - j);
      if (curRow < 0) {
        break;
      }
      if (chessboard[curRow][j] === "Q") {
        return false;
      }
    }
    //检查右对角线上是否有皇后
    for (var k = column + 1; k <= n; k++) {
      var curRow = row + (k - column);
      if (curRow < 0) {
        break;
      }
      if (chessboard[row + (k - column)][j] === "Q") {
        return false;
      }
    }
    return true;
  }

  //开始进行八皇后问题
  dropQueen();
  return result;
};

var result = solveNQueens(4);
console.log("解法 ==>", result);
