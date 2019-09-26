/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var jewelNum = 0;
  for (var i = 0; i < J.length; i++) {
    for (var j = 0; j < J.length; j++) {
      if (J.charAt(i) === S.charAt(j)) {
        jewelNum++;
      }
    }
  }
  return jewelNum;
};
