/**
 * @param {number[]} cont
 * @input cont = [3, 2, 0, 2]
 */
var fraction = function(cont) {

  var k = cont.length - 1;
  var up = cont[k]; //分子
  var down = 1; //分母

  for (var i = k; i > 0; i--) {
    var temp = up;
    up = down + up * (cont[i - 1]);
    down = temp;
  }
  return [up, down];
};

//测试用例
var cont = [3, 2, 0, 2];
var result = fraction(cont);
console.log(result);
