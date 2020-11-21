class LazyManGenerator {
  constructor(name) {
    this.taskArray = [];

    this.intro(name);

    setTimeout(() => {
      this.next();
    }, 0);
  }

  intro(name) {
    // 初始化时任务
    const task = () => {
      console.log(`Hi! This is ${name}`);
      // 执行完初始化时任务后，继续执行下一个任务
      this.next();
    };

    // 将初始化任务放入任务队列中
    this.taskArray.push(task);
    return this;
  }

  next() {
    // 取出下一个任务并执行
    const task = this.taskArray.shift();
    task && task();
  }

  sleep(time) {
    this.sleepTask(time, false);
    // return this 保持链式调用
    return this;
  }

  sleepFirst(time) {
    this.sleepTask(time, true);
    return this;
  }

  sleepTask(time, prior) {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };

    if (prior) {
      this.taskArray.unshift(task);
    } else {
      this.taskArray.push(task);
    }
  }

  eat(name) {
    const task = () => {
      console.log(`Eat ${name}`);
      this.next();
    };

    this.taskArray.push(task);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManGenerator(name);
}

LazyMan("Wangnima").eat("shit").sleep(5).eat("food");
