/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m === 1 || n === 1) return 1;
    else if (n === 2 || m === 2) return Math.max(m, n);
    else return 2 * Math.max(m, n) * (Math.min(m, n) - 1);
};