/*
 * @LastEditors: Lihao
 */

function countingSort(nums) {
  var maxLenth = Math.max(...nums);
  var countingArr = new Array(maxLenth + 1);
  countingArr.fill(0);
  for (var index = 0; index < nums.length; index++) {
    countingArr[nums[index]]++;
  }
  for (var index = 1; index < countingArr.length; index++) {
    countingArr[index] += countingArr[index - 1];
  }
  var resultArr = [];
  for (var index = nums.length - 1; index >= 0; index--) {
    var position = countingArr[nums[index]];
    resultArr[position - 1] = nums[index];
    countingArr[nums[index]]--;
  }
  resultArr.forEach(i => console.log(i))
  return resultArr;
}

var result = countingSort([2, 1, 6, 3, 3, 4, 7, 1, 2, 3, 0]);
console.log('Sorted Array ==>', result);
