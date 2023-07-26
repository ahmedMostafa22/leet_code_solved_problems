    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
var bs = function (nums, target) {
    var n = nums.length, m = nums[0].length;
    var s = 0, e = (n * m) - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        var midE = nums[Math.floor(mid / m)][mid % m];
        if (midE === target) return true;
        else if (target > midE) s = mid + 1;
        else if (target < midE) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return false;
};

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    return bs(matrix,target);
};

