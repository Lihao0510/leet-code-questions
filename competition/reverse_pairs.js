/**
给定一个数组 nums ，如果 i < j 且 nums[i] > 2*nums[j] 我们就将 (i, j) 称作一个重要翻转对。
你需要返回给定数组中的重要翻转对的数量。
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
    // 暴力法,二重循环
    var pairsCount = 0;
    for (var i = 0; i< nums.length - 1; i++) {
        for (var j = i+ 1; j < nums.length; j++) {
            if (nums[i] > 2*nums[j]) {
                pairsCount++;
            }
        }
    }
    return pairsCount
};

var reversePairsPro = function(nums) {
    var pairsCount = 0;
    // 使用归并排序, 在排序作翻转时, 统计符合的对
    var mergeSort = function(nums) {
    
    }
    return pairsCount;
};
