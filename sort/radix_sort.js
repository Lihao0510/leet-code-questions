/*
 * @LastEditors: Lihao
 */

// 基数排序法
function radixSort(nums) {
  var maxNum = Math.max(...nums);
  var level = 1;
  while(level < maxNum) {
    nums = countingSort(nums, level);
    level *= 10;
  }
  console.log(level);
}

function countingSort(nums, level) {
  var countingArr = new Array(10);
  countingArr.fill(0);
  for (var index = 0; index < nums.length; index++) {
    countingArr[nums[index] % (level * 10)]++;
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


var result = radixSort([56, 32, 29, 7, 5, 9, 111, 154, 159, 120, 117, 36]);
console.log('Sorted Array ==>', result);
