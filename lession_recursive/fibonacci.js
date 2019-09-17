/**
 * @param {number} N
 * @return {number}
 * @requires 斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。
 * 给定 N，计算 F(N)。
 */
//使用一个对象来保存计算过的中间值
var cache = {};

var fib = function(N) {
    //非法输入,返回-1
    if (N < 0) {
        return -1;
    }
    if (N <= 1) {
        return N;
    }
    //定义改节点的前一个节点与前二个节点
    var prevNode, prevPrevNode;
    //利用缓存计算节点的值
    if (cache[N - 1] !== undefined) {
        prevNode = cache[N - 1];
    } else {
        //递归求前一个节点的值
        prevNode = fib(N - 1);
        cache[N - 1] = prevNode;
    }
    if (cache[N - 2] !== undefined) {
        prevPrevNode = cache[N - 2];
    } else {
        //递归求前二个节点的值
        prevPrevNode = fib(N - 2);
        cache[N - 2] = prevPrevNode;
    }
    // 求出当前N对应的结果
    return prevNode + prevPrevNode;
};

var result = fib(10);

console.log(result);
