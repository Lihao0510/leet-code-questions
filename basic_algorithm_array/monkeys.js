/**
 * @param {number} n
 * @return {number}
 * @requires 有n个猴子找到了一堆桃子,每个猴子都趁机分成n堆发现多一个
 * 于是它就吃了多的一个并拿走了那一堆,求总共有多少只猴子
 */

var getPeaches = function (n) {
  var loop = true, peaches = n;
  while (loop) {
    //定义当前桃子数
    var curPeaches = peaches;
    for (var i = 1; i <= n; i++) {
      if (curPeaches % n === 1) {
        //如果每个猴子将桃子分n份后都余下一个,则成立,将当前桃子数-1再循环
        if (i === n) {
          loop = false;
        } else {
          curPeaches = (curPeaches - 1) * 4 / 5;
        }
      } else {
        //如果遇到任何一只猴子分完n份后不成立,则将总桃子数+1,结束当前for循环
        peaches++;
        break;
      }
    }
  }
  return peaches;
};

//测试用例
var result = getPeaches(5);
console.log(result);
