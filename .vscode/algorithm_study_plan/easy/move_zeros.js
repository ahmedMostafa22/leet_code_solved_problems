/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var i = 0;
    while (i < nums.length && nums[nums.indexOf(0) + 1] && nums[nums.indexOf(0) + 1] != 0) {
        if (nums[i] !== 0) {
            for (let j = i; j < nums.length - 1; j++) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        } else { i++; }
    }
};

moveZeroes([1]);