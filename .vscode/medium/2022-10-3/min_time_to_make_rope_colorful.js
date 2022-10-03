/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
    var costSum = 0;
    for (let i = 0; i < colors.length; i++) {
        if (i !== colors.length - 1 && colors[i] === colors[i + 1]) {
            var cost = 0;
            var max = -1;
            var lastIndex = i;
            for (let j = i; j < colors.length; j++) {
                console.log(colors[j]);
                if (j === colors.length - 1) {
                    lastIndex = j;
                }
                if (colors[i] !== colors[j]) {
                    lastIndex = j - 1;
                    break;
                }
                cost += neededTime[j];
                if (neededTime[j] > max) {
                    max = neededTime[j];
                }
            }
            i = lastIndex;
            costSum += cost - max;
        }
    }
    return costSum;
};
console.log(minCost("abc", [1, 2, 3, 4, 1]));
