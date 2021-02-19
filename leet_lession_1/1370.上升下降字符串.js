/*
 * @lc app=leetcode.cn id=1370 lang=javascript
 *
 * [1370] 上升下降字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
  if (!s) {
    return '';
  }
  var letterDict = {};
  for (let index = 0; index < s.length; index++) {
    let letter = s.charAt(index);
    if (!letterDict[letter]) {
      letterDict[letter] = 1;
    } else {
      letterDict[letter]++;
    }
  }
  const letterBucket = Object.keys(letterDict).sort().map(letter => {
    return {
      letter,
      count: letterDict[letter]
    }
  })
  console.log(letterBucket);
  var remainCount = s.length;
  var result = ''
  while (remainCount > 0) {
    for (var index = 0; index < letterBucket.length; index++) {
      if (letterBucket[index].count > 0) {
        letterBucket[index].count --;
        remainCount --;
        result += letterBucket[index].letter;
      }
    }
    for (var index = letterBucket.length - 1; index >= 0; index --) {
      if (letterBucket[index].count > 0) {
        letterBucket[index].count --;
        remainCount --;
        result += letterBucket[index].letter;
      }
    }
  }
  return result;
};
// @lc code=end

var result = sortString('ddddaaaabbbbcccc');
console.log('Result ==>', result);

