/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var increases = []
    for (let i = 0; i < prices.length - 1; i++) {
        if (prices[i + 1] - prices[i] > 0) {
            increases.push([prices[i], prices[i + 1]]);

        }
    }
    var res = 0;
    for (let i = 0; i < increases.length; i++) {
        for (let j = i; j < increases.length; j++) {
            if ((increases[j][1] - increases[i][0]) > res) {
                res = increases[j][1] - increases[i][0];
            }
        }

    }
    return res;
};
console.log(maxProfit([1, 2]));