/**
 * @description: 用纯数字的方式递归函数，计算这个数字的自幂数
 * 自幂数是指一个 n 位数，它的每个位上的数字的 n 次幂之和等于它本身
 * 准确说是判断任意一个数是否为自幂数
 * @param {number} number
 * @return: boolean
 */

const number = 54748;
let numberCopy = number;
let length = 0;

while (numberCopy > 1) {
  numberCopy /= 10;
  length++;
}

function self_power(number) {
  if (number <= 0) {
    return 0;
  }
  const computeNum = number % 10;
  const remainNum = (number - computeNum) / 10;
  return self_power(remainNum) + Math.pow(computeNum, length);
}

const result = self_power(54748);

console.log('是否是自幂数 ==>', result === number);


