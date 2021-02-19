/* 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
说明:
你可以假设字符串只包含小写字母。

进阶:
如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 如果字符串长度都不一样, 那么没必要比较了
    if (s.length !== t.length) {
        return false;
    }
    var sArr = [], tArr = [];
    for(var index = 0; index < s.length; index++) {
        sArr.push(s.charAt(index));
        tArr.push(t.charAt(index));
    }
    sArr.sort();
    tArr.sort();
    for (var index = 0; index < sArr.length; index++) {
        if (sArr[index] !== tArr[index]) {
            return false;
        }
    }
    return true;
};

var isAnagramPro = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    // 使用散列表收集字母
    var sHashTable = {};
    var tHashTable = {};
    for(var index = 0; index < s.length; index++) {
        if (!sHashTable[s.charAt(index)]) {
            sHashTable[s.charAt(index)] = 1
        } else {
            sHashTable[s.charAt(index)]++
        }
        if (!tHashTable[t.charAt(index)]) {
            tHashTable[t.charAt(index)] = 1
        } else {
            tHashTable[t.charAt(index)]++
        }
    }
    const wordsList =  Object.keys(sHashTable)
    for (let index = 0; index <wordsList.length; index++) {
        if (sHashTable[wordsList[index]] !== tHashTable[wordsList[index]]) {
            return false;
        }
    }
    return true;
}

var isAnagramEx = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    var hashTable = {};
    for(var index = 0; index < s.length; index++) {
        console.log('正在判断 ==>',hashTable[s.charAt(index)])
        if (hashTable[s.charAt(index)] === undefined) {
            hashTable[s.charAt(index)] = 1;
        } else {
            hashTable[s.charAt(index)]++;
        }
        if (hashTable[t.charAt(index)] === undefined) {
            hashTable[t.charAt(index)] = -1;
        } else {
            hashTable[t.charAt(index)]--;
        }
    }
    return Object.values(hashTable).every(v => !v);
}

var result = isAnagramEx('anagram', 'nagaram');
console.log('是否是移位词 ==>', result);
console.log(Object);
