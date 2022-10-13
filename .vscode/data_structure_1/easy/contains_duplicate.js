/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var map = new Map();

    nums.forEach((n) => map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1));
    console.log(map);
    var res = false;
    map.forEach((v, k, m) => {
        console.log(v);
        console.log(v > 1);
        if (v > 1) {
            res = true;
        }
    });
    return res;
};
console.log(containsDuplicate([1, 2, 3, 1]));