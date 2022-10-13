/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var nums1Iter = m, nums2Iter = 0;
    while (nums1Iter < nums1.length) {
        nums1[nums1Iter] = nums2[nums2Iter];
        nums1Iter++; nums2Iter++;
    }
    nums1 = nums1.sort((a, b) => a - b);
};