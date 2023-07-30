/**
 * @param {number[]} nums
 * @param {number} t
 * @return {number}
 */
var bs = function (nums, t) {
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        if (nums[mid] === t) return true;
        else if (nums[mid] < t) s = mid + 1;
        else if (nums[mid] > t) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return false;
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    nums2.sort((a, b) => a - b);
    var res = [];
    for (let i = 0; i < nums1.length; i++)
        if (bs(nums2, nums1[i]) && !bs(res, nums1[i])) { res.push(nums1[i]); res.sort((a, b) => a - b); }
    return res;
};