/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * @requires 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 */
var twoSum = function (nums, target) {
  /*
  * 思路:暴力枚举法
  * 使用两层循环,依次对数组中的元素两两匹配
  * 知道得到和为target的两个值
  * */
  if (nums.length <= 1) {
    return [];
  }
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

var twoSumPro = function (nums, target) {
  /*
  * 思路:使用hash表记录值和位置的信息
  * 一边遍历一边寻找
  * */
  if (nums.length <= 1) {
    return [];
  }
  //使用一个数组模拟hash表,数组的下标为num值,值为num的index
  var hashMap = [];
  for (var i = 0; i < nums.length; i++) {
    if (hashMap[target - nums[i]] !== undefined) {
      return [hashMap[target - nums[i]], i];
    } else {
      hashMap[nums[i]] = i;
    }
  }
  return [];
};

//测试用例
var nums = [2, 11, 5, 7];
var target = 16;
var result = twoSumPro(nums, target);
console.log(result);
