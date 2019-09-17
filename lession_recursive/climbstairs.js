/**
 * @param {number} n
 * @return {number}
 * @requires 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 注意：给定 n 是一个正整数。
 */

//使用一个缓存对象保存计算中间值
var cache = {};

var climbStairs = function(n) {
    //非法输入
    if (n <= 0) {
        return -1;
    }
    //当爬1个台阶时,只有一种方法;
    //当爬2个台阶时,有两种方法,迈两步或迈一步
    if (n <= 2) {
        return n;
    }
    /*
    * 要爬到第n个台阶,可选的方法
    * 1.在n-1个方法迈一步
    * 2.在n-2个台阶上迈两步
    * */
    var prevStep, prevPrevStep;
    //递归计算爬n-1个台阶的方法,并利用缓存
    if (cache[n - 1] !== undefined) {
        prevStep = cache[n - 1];
    } else {
        prevStep = climbStairs(n - 1);
        cache[n - 1] = prevStep;
    }
    //递归计算爬n-2个台阶的方法,并利用缓存
    if (cache[n - 2] !== undefined) {
        prevPrevStep = cache[n - 2];
    } else {
        prevPrevStep = climbStairs(n - 2);
        cache[n - 2] = prevPrevStep;
    }
    //将这两种方法的可能性相加得到最终结果
    return prevStep + prevPrevStep;
};

//测试用例
var result = climbStairs(10);
console.log(4);
