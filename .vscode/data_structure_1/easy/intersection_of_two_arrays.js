/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var map1 = new Map(), map2 = new Map();
    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], map1.has(nums1[i]) ? map1.get(nums1[i]) + 1 : 1);
    }
    for (let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], map2.has(nums2[i]) ? map2.get(nums2[i]) + 1 : 1);
    }

    var result = [];
    var unqiue1 = Array.from(map1.keys());
    console.log(unqiue1);
    for (let i = 0; i < unqiue1.length; i++) {
        if (map2.has(unqiue1[i])) {
            for (let j = 0; j < Math.min(map1.get(unqiue1[i]), map2.get(unqiue1[i])); j++) {
                result.push(unqiue1[i]);
            }
        }
    }
    return result;
};