/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    var max = 0;
    var res = [];
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max)
            max = candies[i];
    }

    for (let i = 0; i < candies.length; i++) res.push(candies[i] + extraCandies >= max);

    return res;
};