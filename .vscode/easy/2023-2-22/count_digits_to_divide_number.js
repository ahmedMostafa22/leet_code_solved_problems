/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function (num) {
    var digits = num.toString().split('').map(v => parseInt(v));
    var res = 0;
    for (let i = 0; i < digits.length; i++) {
        if (num % digits[i] === 0) {
            res++;
        }
    }
    return res;
};