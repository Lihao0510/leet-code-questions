/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 * @requires 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */
var rotate = function(nums, k) {
  /*
  * 思路,冒泡法
  * 将(n-k, n-1)的元素,依次移动n-k位
  * */
  if (k === 0) {
    return;
  }
  //如果k大于nums长度,则相当于移动k % n次
  if (k > nums.length) {
    k = k % nums.length;
  }
  for (var i = nums.length - k; i < nums.length; i++) {
    for(var j = i; j > i + k - nums.length; j--) {
      var temp = nums[j - 1];
      nums[j - 1] = nums[j];
      nums[j] = temp;
    }
  }
};

//测试用例
var nums = [7, 1, 5, 3, 6, 4];
var result = rotate(nums, 2);
console.log(nums);
