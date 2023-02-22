/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
    var res = [];
    for (let i = 0; i < nums.length; i++) {
        nums[i].toString().split('').forEach(v => res.push(parseInt(v)));
    }
    return res;
};