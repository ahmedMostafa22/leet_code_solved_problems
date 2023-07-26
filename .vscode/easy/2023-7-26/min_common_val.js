/**
 * @param {number[]} nums
 * @param {number} t
 * @return {number}
 */
var bs = function (nums, t) {
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        if (nums[mid] === t) return nums[mid];
        else if (nums[mid] < t) s = mid + 1;
        else if (nums[mid] > t) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return -1;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    for (let i = 0; i < nums1.length; i++) {
        var bsRes = bs(nums2, nums1[i]);
        if (bsRes !== -1) return bsRes;
    }
    return -1;
};