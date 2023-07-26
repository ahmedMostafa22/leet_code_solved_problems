/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    var arr = Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length; i++) {
        if (arr[nums[i]] === -1) arr[nums[i]] = 0;
        else return nums[i];
    }
};