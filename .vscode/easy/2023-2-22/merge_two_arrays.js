/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function (nums1, nums2) {
    var map = new Map();
    var res = [];
    for (let i = 0; i < nums1.length; i++) {
        map.set(nums1[i][0], nums1[i][1]);
    }

    for (let i = 0; i < nums2.length; i++) {
        map.has(nums2[i][0]) ? map.set(nums2[i][0], nums2[i][1] + map.get(nums2[i][0])) : map.set(nums2[i][0], nums2[i][1]);
    }
    map.forEach((v, k) => {
        console.log(k, v);
        res.push([k, v]);
    });
    return res.sort((a, b) => a[0] - b[0]);
};