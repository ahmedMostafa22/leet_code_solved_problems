/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    var arr = nums.slice(nums.length - k, nums.length).concat(nums.slice(0, nums.length - k));
    console.log(nums);
}

rotate([1, 2, 3, 4, 5, 6, 7], 3);