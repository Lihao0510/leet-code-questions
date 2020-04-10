/**
 * @description: 用纯数字的方式递归函数，计算这个数字的自幂数
 * 自幂数是指一个 n 位数，它的每个位上的数字的 n 次幂之和等于它本身
 * 准确说是判断任意一个数是否为自幂数
 * @param {number} number
 * @return: boolean
 */

function self_power(number) {
  const numberArr = number
    .toString()
    .split("")
    .map((numberChar) => {
      return parseInt(numberChar);
    });

  let index = 0,
    length = numberArr.length;

  function cumputePower(numberArr) {
    if(index === length) {
      return 0;
    }
    return Math.pow(numberArr[index++], length) + cumputePower(numberArr);
  }

  const computeResult =  cumputePower(numberArr);
  return computeResult === number;
}

const result = self_power(54748);

