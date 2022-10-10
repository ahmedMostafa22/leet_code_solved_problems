/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
    if (n <= 3 || n % 2 === 1) {
        return true;
    } else return false;
};