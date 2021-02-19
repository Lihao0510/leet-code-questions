/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 * 我们定制了一款特殊的力扣键盘，所有的键都排列在一行上。

 我们可以按从左到右的顺序，用一个长度为 26 的字符串 keyboard （索引从 0 开始，到 25 结束）来表示该键盘的键位布局。

 现在需要测试这个键盘是否能够有效工作，那么我们就需要个机械手来测试这个键盘。

 最初的时候，机械手位于左边起第一个键（也就是索引为 0 的键）的上方。当机械手移动到某一字符所在的键位时，就会在终端上输出该字符。

 机械手从索引 i 移动到索引 j 所需要的时间是 |i - j|。

 当前测试需要你使用机械手输出指定的单词 word，请你编写一个函数来计算机械手输出该单词所需的时间。

 */
var calculateTime = function(keyboard, word) {
  //思路,将字符串转换为哈希表,这样就可以以时间复杂度O(1)来找到字母的所在位置
  //使用对象作为哈希表
  var keyboardTable = {};
  //机械手的初始位置为左边,记为0位
  var lastIndex = 0;
  //记录使用的总时间
  var totalTime = 0;
  for (var i = 0; i < keyboard.length; i++) {
    keyboardTable[keyboard.charAt(i)] = i;
  }
  for (var j = 0; j < word.length; j++) {
    var curIndex = keyboardTable[word.charAt(j)];
    //根据两个位置的绝对值计算出移动所需的时间
    if (curIndex >= lastIndex) {
      totalTime += (curIndex - lastIndex);
    } else {
      totalTime += (lastIndex - curIndex);
    }
    lastIndex = curIndex;
  }
  return totalTime;
};

var keyboard = "abcdefghijklmnopqrstuvwxyz", word = "nmsl";

var result = calculateTime(keyboard, word);

console.log('所需的时间为 ==>', result);
