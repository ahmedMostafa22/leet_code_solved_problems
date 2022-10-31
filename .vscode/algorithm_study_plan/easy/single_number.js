/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    var res;
    map.forEach((v, k) => {
        if (v === 1) {
            res = k;
        }
    });
    return res;
};