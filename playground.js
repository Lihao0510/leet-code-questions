function SmartPromise(executor) {

    if (!(this instanceof SmartPromise)) {
        throw new Error('SmartPromise构造函数必须通过new创建!');
    }

    var self = this;
    self.status = 'pending';
    self.value = null;
    self.reason = null;

    function resolve(value) {
        console.log('Promise Resolve ==>', value);
        self.value = value;
    }

    function reject(reason) {
        console.log('Promise Reject ==>', value);
        self.reason = reason;
    }  

    executor(resolve, reject);
}

SmartPromise.prototype.then = function (onfullfilled, onrejected) {

}

var promise = new SmartPromise(function(resolve, reject) {
    resolve(true);
})

promise.then(function(result, err) {
    console.log('Promise Result ==>', result);
})

console.log('开始Promise调试 ==>', SmartPromise);