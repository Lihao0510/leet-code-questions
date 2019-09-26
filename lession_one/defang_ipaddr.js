/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.split('.').join('[.]')
};

//测试用例
console.log(defangIPaddr("1.1.1.1"));
