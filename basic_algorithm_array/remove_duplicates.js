/**
 * @param {number[]} nums
 * @return {number}
 * @requires 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
 */
var removeDuplicates = function (nums) {
  /*
  * 思路:使用一个变量保存上次遍历得到的值
  * 由于是排序数组,所以重复的元素必定是聚堆出现
  * 时间复杂度:O(n),空间复杂度O(1)
  * */
  //数组为空或只有1个元素时,不进行处理
  if (nums.length <= 1) {
    return nums.length;
  }
  var preValue = nums[0]; //上一步保存的值
  for (var i = 1; i < nums.length; i++) {
    //当前元素和上一个元素相同,则删除该元素,并将指针后退一步
    if (nums[i] === preValue) {
      nums.splice(i, 1);
      i--;
    }
    preValue = nums[i];
  }
  return nums.length;
};

//测试用例
var nums = [1,1,2];
var length = removeDuplicates(nums);
console.log(length);
