// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length < 2) {
    return false
  }
  var braketStack = [];
  for (let index = 0; index < s.length; index++) {
    var currentBraket = s.charAt(index);
    if (['(', '[', '{'].indexOf(currentBraket) !== -1) {
      braketStack.push(currentBraket);
    } else {
      if (currentBraket === ')') {
        if (braketStack[braketStack.length - 1] === '(') {
          braketStack.pop()
        } else {
          return false;
        }
      } else if (currentBraket === ']') {
        if (braketStack[braketStack.length - 1] === '[') {
          braketStack.pop()
        } else {
          return false;
        }
      } else {
        if (braketStack[braketStack.length - 1] === '{') {
          braketStack.pop()
        } else {
          return false;
        }
      }
    }
  }
  return braketStack.length === 0;
};
// @lc code=end

var isValid2 = function(s) {
  if (s.length % 2 !== 0) {
    return false
  }
  var braketStack = [];
  var leftBrakets = ['(', '{', '[']
  var braket_map = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for(var i = 0; i < s.length; i++) {
    var currentChar = s.charAt(i);
    if (leftBrakets.indexOf(currentChar) !== -1) {
      braketStack.push(currentChar);
    } else if (braketStack.pop() === braket_map[currentChar]) {
      continue;
    } else {
      return false;
    }
  }
  return braketStack.length === 0;
}

var testLine = ''
