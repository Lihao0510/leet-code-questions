/* 
插入排序
*/
function insertSort(originArray) {
    for (let i = 0; i < originArray.length; i++) {
        var minNum = originArray[i];
        var minIndex = i;
        for (let j = i; j < originArray.length; j++) {
            console.log('当前遍历的元素 ==>', j);
            if (originArray[j] < minNum) {
                minNum = originArray[j];
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            var swapValue = originArray[i];
            originArray[i] = originArray[minIndex];
            originArray[minIndex] = swapValue;
        }
    }
    return originArray;
}
var result = insertSort([2, 1, 6, 3, 4]);
console.log('Sorted Array ==>', result);
