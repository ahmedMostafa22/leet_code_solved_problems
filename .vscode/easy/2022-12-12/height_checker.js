/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
    var actual = [];
    heights.forEach((h) => actual.push(h));
    heights.sort((a, b) => a - b);
    var res = 0;
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== actual[i]) {
            res++;
        }
    }
    return res;
};
console.log(heightChecker([1, 1, 4, 2, 1, 3]));