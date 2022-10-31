/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return accounts.sort((a, b) => b.reduce((prev, curr) => prev + curr) - a.reduce((prev, curr) => prev + curr))[0].reduce((prev, curr) => prev + curr);
};
console.log(maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]));