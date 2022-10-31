/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    
    if (n === 0) return n;
    var fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
};

console.log(trailingZeroes(0));