/**
 * @param {number} n
 * @return {string[][]}
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 */

/*
* 回溯算法实际上一个类似枚举的搜索尝试过程，
* 主要是在搜索尝试过程中寻找问题的解，
* 当发现已不满足求解条件时，就“回溯”返回，
* 尝试别的路径。回溯法是一种选优搜索法，按选优条件向前搜索，
* 以达到目标。但当探索到某一步时，发现原先选择并不优或达不到目标，
* 就退回一步重新选择，这种走不通就退回再走的技术为回溯法，
* 而满足回溯条件的某个状态的点称为“回溯点”。
* 许多复杂的，规模较大的问题都可以使用回溯法，
* 有“通用解题方法”的美称。
* */

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

  //递归函数,逐行对皇后进行放置
  function dropQueen(currentRow) {
    var row = currentRow || 0;

    if (row >= n) {
      result.push(snapshot(chessboard));
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
      var curRow1 = row - (k - column);
      if (row === 2 && column === 1) {
      }
      if (curRow1 < 0) {
        break;
      }
      if (chessboard[curRow1][k] === "Q") {
        return false;
      }
    }
    return true;
  }

  //对得出的结果进行快照
  function snapshot(source) {
    var target = [];
    for (var u = 0; u < source.length; u++) {
      target.push(source[u].join(''));
    }
    return target;
  }

  //开始进行八皇后问题
  dropQueen();
  return result;
};

var result = solveNQueens(4);
console.log("解法 ==>", result);
