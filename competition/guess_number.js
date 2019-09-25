/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
  var rightCount = 0;
  for (var i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      rightCount++;
    }
  }
  return rightCount;
};
