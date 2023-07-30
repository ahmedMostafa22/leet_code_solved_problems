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
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    var count = 0;
    var i = 1;

    while (true) {
        if (!bs(arr, i)) { count++; if (count === k) return i; }
        i++;
    }
};