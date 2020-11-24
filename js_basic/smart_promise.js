function SmartPromise(executor) {

    if (!(this instanceof SmartPromise)) {
        throw new Error('SmartPromise构造函数必须通过new创建!');
    }

    var self = this;
    self.status = 'pending';
    self.value = null;
    self.reason = null;

    self.onFullfilledHandler = Function.prototype;
    self.onRejectedHandler = Function.prototype;

    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value;
            self.status = 'fullfilled';
            self.onFullfilledHandler(self.value);
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.reason = reason;
            self.status = 'rejected';
            self.onRejectedHandler(new Error(self.reason))
        }
    }  

    executor(resolve, reject);
}

SmartPromise.prototype.then = function (onfullfilled, onrejected) {
    onfullfilled = typeof onfullfilled === 'function' ? onfullfilled: data => data;
    onrejected = typeof onrejected === 'function' ? onrejected: err => {throw err};

    console.log('当前实例 ==>', this);

    if (this.status === 'fullfilled') {
        setTimeout(() => {
            onfullfilled(this.value);
        }, 0)
    }
    if (this.status === 'rejected') {
        setTimeout(() => {
            onrejected(this.reason)
        }, 0)
    }
    if (this.status === 'pending') {
        this.onFullfilledHandler = onfullfilled;
        this.onRejectedHandler = onrejected;
    }
}

var promise = new SmartPromise(function(resolve, reject) {
    resolve('success!');
})

promise.then(function(result) {
    console.log('Promise Result ==>', result);
})

console.log('开始Promise调试 ==>', promise);