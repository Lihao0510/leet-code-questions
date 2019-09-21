/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 * @requires 有 1000 只水桶，其中有且只有一桶装的含有毒药，其余装的都是水。
 * 它们从外观看起来都一样。如果小猪喝了毒药，它会在 15 分钟内死去。
 问题来了，如果需要你在一小时内，弄清楚哪只水桶含有毒药，你最少需要多少只猪？
 回答这个问题，并为下列的进阶问题编写一个通用算法。
 */
var poorPigs = function(buckets, minutesToDie, minutesToTest) {

  var intDivide = function (origin, divide) {
    return (origin / divide) - (origin / divide) % 1;
  };

  var intDivideUpper = function (origin, divide) {
    var result = (origin / divide);
    var extra = (origin / divide) % 1;
    if (extra) {
      return result + 1 - extra;
    }
    return result;
  };

  //找到实验的次数
  var times = intDivide(minutesToTest, minutesToDie);
  var loop = true;
  var pigNum = times;
  while (loop) {
    var bucketNum = buckets;
    var curPigNum = pigNum;
    for (var i = 1; i <= times; i++) {
      bucketNum = intDivideUpper(bucketNum, curPigNum + 1);
      curPigNum--;
    }
    if (bucketNum <= 1) {
      return pigNum;
    }
    pigNum++;
  }
};


//测试用例
var pigNum = poorPigs(1000, 15, 60);
console.log(pigNum);
