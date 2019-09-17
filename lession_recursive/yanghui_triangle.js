/**
 * 给定一个非负整数 numRows，生成杨辉三角的前 numRows 行
 * @param {number} numRows
 * @return {number[][]}
 */
var cache = {};

var generate = function(numRows) {
    var result = [];
    for(var i = 0; i < numRows; i++) {
        result[i] = [];
        for (var j = 0; j <= i; j++) {
            result[i][j] = getRowValue(i + 1, j + 1);
        }
    }
    return result;
};

function getRowValue(row, col) {
    if (col === 1 || row === col) {
        return 1;
    }
    var left, right;
    if (cache[`${row - 1}-${col - 1}`]) {
        left = cache[`${row - 1}-${col - 1}`];
    } else {
        left = getRowValue(row - 1, col - 1);
        cache[`${row - 1}-${col - 1}`] = left;
    }
    if (cache[`${row - 1}-${col}`]) {
        right = cache[`${row - 1}-${col}`];
    } else {
        right = getRowValue(row - 1, col);
        cache[`${row - 1}-${col}`] = right;
    }
    return left + right;
}

var result = generate(30);
console.log(result);
