/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var start = 0, end = nums.length - 1;
    var mid = Math.floor((nums.length - 1) / 2);
    while (start <= end) {
        if (nums[mid] === target) {
            return mid;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end) / 2);
    }
    return mid + 1;
};

console.log(searchInsert([1, 3, 5, 6], 0));