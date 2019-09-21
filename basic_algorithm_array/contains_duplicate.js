/**
 * @param {number[]} nums
 * @return {boolean}
 * @requires 给定一个整数数组，判断是否存在重复元素。
 如果任何值在数组中出现至少两次，函数返回 true。如果数组中每个元素都不相同，则返回 false。
 */
var containsDuplicate = function(nums) {
  /*
  * 暴力法:
  * 循环遍历数组中的元素
  * 如果后续的元素都不同,则不做处理
  * 发现有相同元素,返回true
  * */
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

//测试用例
var nums = [1,2,3,5];
console.log(containsDuplicate((nums)));
