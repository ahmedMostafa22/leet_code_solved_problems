/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let res = Math.log2(n);
    console.log(res);
    return res % 1 === 0
};

console.log(isPowerOfTwo(32));