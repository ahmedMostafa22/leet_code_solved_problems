/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[i + 1] === nums[j] + nums[j + 1]) {
                return true;
            }
        }
    }
    return false
};

console.log(findSubarrays([4, 2, 4]));