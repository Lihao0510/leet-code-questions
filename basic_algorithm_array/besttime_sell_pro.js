/**
 * @param {number[]} prices
 * @return {number}
 * @requires 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
 设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。
 注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

var maxProfit = function(prices) {
  var leftIndex = 0, rightIndex = 1, profit = 0;
  while(leftIndex < prices.length - 1) {
    if (prices[leftIndex] < prices[rightIndex]) {
      if (prices[rightIndex] >= prices[rightIndex + 1] || rightIndex === prices.length - 1) {
        profit += prices[rightIndex] - prices[leftIndex];
        leftIndex = rightIndex + 1;
        rightIndex = leftIndex + 1;
      } else {
        rightIndex ++;
      }
    } else {
      leftIndex = rightIndex;
      rightIndex = leftIndex + 1;
    }
  }
  return profit;
};

//测试用例
var prices = [1,2,3,4,5];
var result = maxProfit(prices);
console.log(result);
