function mergeSort(nums) {
    _mergeSort(nums, 0, nums.length - 1);
    return nums;
}

// 对nums数组的[start, end]区间进行排序
function _mergeSort(nums, start, end) {
    if (start >= end) {
        return;
    }
    var midIndex = Math.floor((start + end) / 2);
    _mergeSort(nums, start, midIndex);
    _mergeSort(nums, midIndex + 1, end);
    _merge(nums, start, midIndex, end);
}

// 对[start, midIndex]和[midIndex + 1, end]进行合并, 从小到大排列
function _merge(nums, start, midIndex, end) {
    var leftIndex = start, rightIndex = midIndex + 1;
    var tempNums = [];
    for (var index = 0; index < end - start + 1; index ++) {
        if (leftIndex <= midIndex && rightIndex <=end) {
            if (nums[leftIndex] <= nums[rightIndex]) {
                tempNums.push(nums[leftIndex]);
                leftIndex++;
            } else {
                tempNums.push(nums[rightIndex]);
                rightIndex++;
            }
        } else {
            if (leftIndex <= midIndex) {
                tempNums.push(nums[leftIndex]);
                leftIndex++;
            } else {
                tempNums.push(nums[rightIndex]);
                rightIndex++;
            }
        }
    }
    console.log('进行合并 ==>', nums, tempNums, start, midIndex, end);
    for (var index = start; index < end + 1; index ++) {
        nums[index] = tempNums[index - start];
    }
}

var testCase = [11, 29, 35, 8, 8, 9, 40, 5, 11, 13, 26, 39, 20, 0, 33, 39, 26];
var result = mergeSort(testCase);
console.log('排序结果 ==>', result, testCase);