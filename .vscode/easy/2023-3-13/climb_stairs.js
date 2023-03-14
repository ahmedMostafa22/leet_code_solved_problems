/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var maxTwos = Math.floor(n / 2), maxOnes = n;
    var result = 0;
    for (let currentSteps = n - (maxTwos * 2) + maxTwos; currentSteps <= maxOnes; currentSteps++) {
        var twoes = n - currentSteps;
        var ones = currentSteps - twoes;
        var probRes = (twoes === 0 || ones === 0) ? 1 : permutations(currentSteps, 2);
        if (ones > 1 && twoes > 0 && probRes % ones === 0) {
            probRes /= ones;
        } if (twoes > 1 && ones > 0 && probRes % twoes === 0) {
            probRes /= twoes;
        }
        console.log(currentSteps, ones, twoes, probRes);
        result += probRes;
    }
    return result;
};
//console.log(climbStairs(7));

function fact(num) {
    var rval = 1;
    for (var i = 2; i <= num; i++)
        rval = rval * i;
    return rval;
}

function permutations(n, k) {
    var p = fact(n);
    var v = fact(n - k);
    return p / v;
}