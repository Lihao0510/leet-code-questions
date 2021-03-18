function Person(name) {
  this.name = name;
}

var person = new Person('Lihao');

console.log('当前Person对象 ==>', person);

function newObj(...args) {
  var constructor = args.shift();

  var obj = Object.create(constructor.prototype);

  var result = constructor.apply(obj, args);

  return (typeof result === 'object' && result !== null) ? result: obj;
}

var mockPerson = newObj(Person, 'Wangnima');

console.log('模拟new出的Person对象 ==>', mockPerson);
