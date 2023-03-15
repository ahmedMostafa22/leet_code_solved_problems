/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    var unique1 = [], unique2 = [];

    for (let i = 0; i < nums2.length; i++) {
        if (nums1.filter(n => n === nums2[i]).length === 0 && unique2.filter(n => n === nums2[i]).length === 0) {
            unique2.push(nums2[i]);
        }
    }

    for (let i = 0; i < nums1.length; i++) {
        if (nums2.filter(n => n === nums1[i]).length === 0 && unique1.filter(n => n === nums1[i]).length === 0) {
            unique1.push(nums1[i]);
        }
    }


    return [unique1, unique2];
};