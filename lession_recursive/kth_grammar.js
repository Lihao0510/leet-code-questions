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
//优化后的算法,不会占用过多堆内存
var kthGrammar = function(N, K) {
  /*
  * 思路:根据第N-1行的内容推测第N行内容
  * 第N行的前半部分为N-1行,后半部分为N-1行逐位取反
  * 使用递归方式,判断K的值:
  * 如果K的值在N行长度的前半段,直接取N-1行的第K个
  * 如果K的值在N行长度的后半段,取N-1行的K - (N.length / 2)个
  * 最终迭代到第一行
  * */

  //获取第N行的第K个数,递归函数
  var getValue = function (N, K) {
    if (N === 1) {
      return 0;
    }
    if (K > getPow(N)) {
      return -1;
    }
    console.log('当前长度 ==>', N, getPow(N));
    if (K <= getPow(N) / 2) {
      return getValue(N - 1, K)
    } else {
      return changeValue(getValue(N - 1, K - (getPow(N) / 2)));
    }
  };

  //变换 0 -> 1, 1 -> 0
  var changeValue = function(value) {
    return !!value? 0: 1;
  };

  //获取2^的值
  var getPow = function(N) {
    var result = 1;
    for (var i = 1; i < N; i++) {
      result *= 2
    }
    return result;
  };

  return getValue(N, K);
};

//强制算出每一行的方法,会引起堆内存溢出,仅用于暴力计算
var kthGrammarOld = function(N, K) {
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

  console.log(row);
  if (row[K - 1] !== undefined) {
    return row[K - 1];
  } else {
    return -1;
  }
};

//测试用例
var result = kthGrammar(2, 2);
console.log(result);
