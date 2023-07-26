/**
 * @param {number[]} nums
 * @return {number}
 */
var findPCount = function (nums) {
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        if (nums[mid] > 0 && nums[mid - 1] <= 0) return nums.length - mid;
        else if (nums[mid] <= 0) s = mid + 1;
        else if (nums[mid] > 0 && nums[mid - 1] > 0) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNCount = function (nums) {
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        if (nums[mid] < 0 && nums[mid + 1] >= 0) return mid + 1;
        else if (nums[mid] >= 0) e = mid - 1;
        else if (nums[mid] < 0 && nums[mid + 1] < 0) s = mid + 1;
        mid = Math.floor((s + e) / 2);
    }
    return 0;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
    var posCount = nums[0] > 0 ? nums.length : findPCount(nums);
    var negCount = nums[nums.length - 1] < 0 ? nums.length : findNCount(nums);
    // console.log('pos count is', posCount, 'neg count is', negCount);
    return Math.max(posCount, negCount);
};

// maximumCount([-2, -1, -1, 1, 2, 3]);
// maximumCount([-3, -2, -1, 0, 0, 1, 2]);
// maximumCount([5, 20, 66, 1314]);