/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function (a, b) {
    let commonFactors = 0;
    for (let i = 1; i <= Math.min(a, b); i++) {
        if (a % i === 0 && b % i === 0) {
            commonFactors++;
        }
    }
    return commonFactors;
};

console.log(commonFactors(25, 30));