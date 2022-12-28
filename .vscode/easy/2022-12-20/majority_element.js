/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.has(nums[i]) ? map.get(nums[i]) + 1 : 1);
    }
    var res = -1;
    map.forEach((v, k) => {
        if (v > (nums.length / 2)) { res = k; }
    })
    return res;
};