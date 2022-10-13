/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    var accSum = [nums[0]];
    nums.reduce((p, n) => {
        accSum.push(p + n);
        return p + n;
    });

};

console.log(maxSubArray([1, 2, -1, -2, 2, 1, -2, 1]));