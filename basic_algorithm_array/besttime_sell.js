/**
 * @param {number[]} prices
 * @return {number}
 * @requires 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */


var maxProfit = function(pricesArr) {
  var result = getProfit(0);

  function getProfit(start) {
    //记录本次的最大利润
    var maxProfit = 0;
    //假设一天都可以买入,只要接下来的某天的价格高于当天价格就可以卖出
    for (var i = start; i < pricesArr.length - 1; i++) {
      for (var j = i + 1; j < pricesArr.length; j++) {
        if (pricesArr[i] < pricesArr[j] && pricesArr[j] > pricesArr[j + 1]) {
          var profit = (pricesArr[j] - pricesArr[i]) + getProfit(j + 1);
          if (profit > maxProfit) {
            maxProfit = profit;
          }
        }
      }
    }
    return maxProfit;
  }

  return result;
};

//测试用例
var prices = [7, 1, 5, 3, 6, 4];
var result = maxProfit(prices);
console.log(result);
