/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
    if (time / (n - 1) % 2 === 0) {
        return 1;
    }
    return Math.floor(time / (n - 1)) % 2 === 0 ? (time % (n - 1) + 1) : n - (time % (n - 1));
};

console.log(passThePillow(9, 4));
 //n=4 time=5
//1 -> 2 -> 3 -> 4 -> 3 -> 2.