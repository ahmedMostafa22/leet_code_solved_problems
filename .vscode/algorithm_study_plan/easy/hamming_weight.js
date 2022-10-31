/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let res = 0;
    for (let i = 32; i >= 0; i--) {
        if (n >= Math.pow(2, i)) {
            console.log(i);
            res++;
            n -= Math.pow(2, i);
        }
    }
    return res;
};