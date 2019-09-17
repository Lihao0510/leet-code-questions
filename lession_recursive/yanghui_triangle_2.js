/**
 * @param {number} rowIndex
 * @return {number[]}
 * @require 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 * 你可以优化你的算法到 O(k) 空间复杂度吗？
 */
//缓存上一层数据的数组,最大空间为传入的rowIndex
var rowCache = [1];

var getRow = function(rowIndex) {
    if (rowIndex < 0) {
        return [];
    }
    //题目实际的index为从0开始,本程序实际从1开始
    rowIndex++;

    //缓存上一层数据的数组,最大空间为传入的rowIndex
    var rowCache = [];

    //从行数为1开始,直到行数为rowIndex
    for (var rowNum = 1; rowNum <= rowIndex; rowNum++) {
        var result = [];
        //从列数为1开始,直到列数等于行数
        for (var columnNum = 1; columnNum <= rowNum; columnNum ++) {
            //如果是首列或最后一列,那么设定为1
            if (columnNum === 1 || columnNum === rowNum) {
                result.push(1);
                continue;
            }
            //根据上一行的数据,计算出本行的值
            var cellData = rowCache[columnNum - 1 - 1] + rowCache[columnNum - 1];
            result.push(cellData);
        }
        //每一行求完后,将这一行的结果赋值给cache,供下一行使用
        rowCache = result;
    }
    return rowCache;
};

getRow(6);
