/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    var i = 0;
    while (i < nums.length) {
        if (nums[i] > nums[i + 1]) {
            var temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
            i = 0; continue;
        }
        i++;
    }
    console.log(nums);
};
sortColors([2, 0, 2, 1, 1, 0]);