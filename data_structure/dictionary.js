/*
 * @LastEditors: Lihao
 */
function Dictionary() {
  this.dataSource = new Array();
  this.add = function(key, value) {
    this.dataSource[key] = value;
  }
}

var dict = new Dictionary();

dict.add('name', 'wangnima');
dict.add(3, 'lihao');
dict.add(0, 'shit');
dict.add(2, 'game');
dict.add(1, 'lihao');
dict.add('hobby', {
  code: 1,
  name: '撸管子'
});

console.log('当前字典内容 ==>', dict.dataSource);
