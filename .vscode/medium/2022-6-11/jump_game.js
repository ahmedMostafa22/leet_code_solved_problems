/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    var length = nums.length;

    for (let i = 0; i < length; i += 0) {
        console.log('Current index is ' + i.toString() + ' and max jump is ' + nums[i]);
        if (nums[i] === 0 && i != length - 1) {
            console.log('Current index value is ZERO and its not the last index ' + i.toString());
            return false;
        } if (i === length - 1) {
            console.log('Current index is ZERO and its the last index ' + i.toString());
            return true;
        }
        if (nums[i] + i >= length - 1) {
            console.log('Can reach the last index from ' + i.toString());
            return true;
        }
        var max = 0, maxIndex = -1;
        for (let j = i + 1; j <= i + nums[i]; j++) {
            if (nums[j] >= max) {
                max = nums[j];
                maxIndex = j;
            }
        }
        console.log('Max next step is ' + max.toString() + ' and max next step index is ' + maxIndex.toString());
        console.log('current max reach ' + nums[i + nums[i]]);
        console.log('current max number max reach ' + nums[maxIndex + nums[maxIndex]]);
        console.log('max index is ' + maxIndex.toString());
        console.log('current index is ' + (i + nums[i]).toString());
        if (i + nums[i] >= length || maxIndex + max >= length) return true;
        i += Math.max(nums[i + nums[i]] === 0 ? -1 : nums[i], nums[maxIndex + max] === 0 ? -1 : max);
        console.log('new i is ' + i.toString());

    }
    return true;
};

console.log(canJump([5, 9, 3, 2, 1, 0, 2, 3, 3, 1, 0, 0]));
// console.log(canJump([3, 2, 1, 0, 4]));
// console.log(canJump([2, 3, 1, 1, 4]));
// console.log(canJump([3, 0, 8, 2, 0, 0, 1]));