/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    var ans = [];
    for (let i = 0; i < nums1.length; i++) {
        var nextGreater = -1;
        for (let j = nums2.indexOf(nums1[i]) + 1; j < nums2.length; j++)
            if (nums2[j] > nums1[i]) { nextGreater = nums2[j]; break; }
        ans.push(nextGreater);
    }
    return ans;
};