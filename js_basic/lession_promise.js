class myPromise {
    constructor (callback = function () {}) {
      const _resolve = (params) => {this.resolveParams = params; this.ifResolve = true;};
      const _reject = () => {this.ifReject = true};
      this.ifResolve = false;
      this.resolveParams = null;
      callback(_resolve, _reject);
    }
    static resolve (params) {
      this.ifResolve = true;
      this.resolveParams = params;
      return this;
    }
    then (callback = function () {}) {
      // 通过这个标识符，判断是否调用了resolve这个函数，如果调用了则执行下面的任务
      if (this.ifResolve) {
        let count = 0;
        // Vue2.5之前用的dom更新中使用了Promise，MutationObserver和setTimeout，我使用的是Vue关于MutationObserver的使用方式
        // MutationObserver可以绑定某个节点，当节点改变时，回调函数callback将放入微任务中
        // 通过装饰者模式，将回调函数包装一下，将执行之后的返回值保存起来
        const observe = new MutationObserver(() => {
          this.resolveParams = callback(this.resolveParams)
        });
        // 为了节约开销，创建一个文本比创建一个dom可划算的多
        const textNode = document.createTextNode(String(count));
        observe.observe(textNode, {
          // 当文本改变时触发回调
          characterData: true
        });
        // 改变文本，回调callback触发
        textNode.data = String(++count);
      }
      return this;
    }
  }
  console.log('start');
  new myPromise((resolve, reject) => {
    console.log('start promise');
    resolve();
  }).then(e => {
    console.log('then');
  });
  console.log('end promise');
  console.log(Object);