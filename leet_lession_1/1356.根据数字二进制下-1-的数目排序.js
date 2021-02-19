/*
 * @lc app=leetcode.cn id=1356 lang=javascript
 *
 * [1356] 根据数字二进制下 1 的数目排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
  return arr.map(number => ({
    binary: number.toString(2),
    value: number
  })).sort((a, b) => {
    var compare1 = get1Num(a.binary) - get1Num(b.binary);
    return compare1 === 0 ? a.value - b.value: compare1;
  }).map(number => number.value);
};

function get1Num(binaryString) {
  var num = 0;
  for (var index = 0; index < binaryString.length; index++) {
    if (binaryString.charAt(index) === '1') {
      num++;
    }
  }
  return num;
}

// @lc code=end

var result = sortByBits([0,1,2,3,4,5,6,7,8]);
console.log('结果 ==>', result);
