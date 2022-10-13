/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var increases = []
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] - prices[i] > 0) {
            increases.push([prices[i], prices[i + 1]])
        }
    }
    return Math.max(0, increases[increases.length - 1][1] - increases[0][0]);
};
console.log(maxProfit([7, 1, 5, 3, 6, 4]));