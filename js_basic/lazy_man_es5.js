"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var LazyManGenerator = /*#__PURE__*/function () {
  function LazyManGenerator(name) {
    var _this = this;

    _classCallCheck(this, LazyManGenerator);

    this.taskArray = [];
    this.intro(name);
    setTimeout(function () {
      _this.next();
    }, 0);
  }

  _createClass(LazyManGenerator, [{
    key: "intro",
    value: function intro(name) {
      var _this2 = this;

      // 初始化时任务
      var task = function task() {
        console.log("Hi! This is ".concat(name)); // 执行完初始化时任务后，继续执行下一个任务

        _this2.next();
      }; // 将初始化任务放入任务队列中


      this.taskArray.push(task);
      return this;
    }
  }, {
    key: "next",
    value: function next() {
      // 取出下一个任务并执行
      var task = this.taskArray.shift();
      task && task();
    }
  }, {
    key: "sleep",
    value: function sleep(time) {
      this.sleepTask(time, false); // return this 保持链式调用

      return this;
    }
  }, {
    key: "sleepFirst",
    value: function sleepFirst(time) {
      this.sleepTask(time, true);
      return this;
    }
  }, {
    key: "sleepTask",
    value: function sleepTask(time, prior) {
      var _this3 = this;

      var task = function task() {
        setTimeout(function () {
          console.log("Wake up after ".concat(time));

          _this3.next();
        }, time * 1000);
      };

      if (prior) {
        this.taskArray.unshift(task);
      } else {
        this.taskArray.push(task);
      }
    }
  }, {
    key: "eat",
    value: function eat(name) {
      var _this4 = this;

      var task = function task() {
        console.log("Eat ".concat(name));

        _this4.next();
      };

      this.taskArray.push(task);
      return this;
    }
  }]);

  return LazyManGenerator;
}();

function LazyMan(name) {
  return new LazyManGenerator(name);
}

LazyMan("Wangnima").eat("shit").sleep(5).eat("food");
