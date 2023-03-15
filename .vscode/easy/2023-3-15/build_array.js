/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    var result = [];
    nums.forEach(n => {
        result.push(nums[n]);
    });
    return result;
};