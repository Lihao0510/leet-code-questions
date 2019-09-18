/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 * @requires 在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。
 给定行数 N 和序数 K，返回第 N 行中第 K个字符。（K从1开始）
 解释:
 第一行: 0
 第二行: 01
 第三行: 0110
 第四行: 01101001
 */
var kthGrammar = function(N, K) {
  /*
  * 思路:使用循环方式求出第N行
  * 第N行与(N-1)行存在确定的关系
  * 为降低空间复杂度,我们使用一个数组保留上一行的结果
  * */
  if (N < 1 || K < 1) {
    return -1
  }
  //定义缓存数组,缓存上一层
  var rowCache = [0];
  //定义函数:获取第N行
  var getRow = function (N) {
    if (N === 1) {
      return rowCache;
    }
    //外层循环,从第二行开始直到第N行
    for (var rowNum = 2; rowNum <= N; rowNum++) {
      //内层循环,从上一行的第1列开始,直到结束
      var curRow = [];
      for (var index = 0; index < rowCache.length; index ++) {
        if (rowCache[index] === 0) {
          curRow.push(0);
          curRow.push(1);
        } else {
          curRow.push(1);
          curRow.push(0);
        }
      }
      rowCache = curRow;
    }
    return rowCache;
  };

  var row = getRow(N);

  if (row[K - 1] !== undefined) {
    return row[K - 1];
  } else {
    return -1;
  }
};

//测试用例
var result = kthGrammar(28, 1);
console.log(result);
