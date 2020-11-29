/**
给定由一些正数（代表长度）组成的数组 A，
返回由其中三个长度组成的、面积不为零的三角形的最大周长。
如果不能形成任何面积不为零的三角形，返回 0。
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
    var maxLength = 0;
    if (A.length < 3) {
        return 0;
    }
    A.sort((a, b) => a - b);
    var i = A.length - 3, j = A.length - 2; k = A.length - 1, isStop = false;
    while(!isStop) {
        a = A[i], b = A[j], c = A[k];
        if (a + b > c && a + c > b && b + c > a) {
            if (a + b + c > maxLength) {
                maxLength = a + b + c;
            }
            isStop = true;
            continue;
        }
        if (i === 0 && j === 1&& k === 2) {
            isStop = true;
           continue;
        } 
        if (k - j > 1) {
            k --;
        } else if (j - i > 1) {
            j --;
        } else {
            i--
        }
    }
    return maxLength;
}; 

var A = [26,46,88,38,22,2,31,11,36,18,123];
var result = largestPerimeter(A);
console.log('最大的三角形周长 ==>', result);