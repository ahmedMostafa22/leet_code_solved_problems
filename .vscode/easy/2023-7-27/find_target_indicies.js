/**
 * @param {number[]} nums
 * @param {number} t
 * @return {number}
 */
var bs = function (nums, t) {
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        if (nums[mid] === t) {
            for (var m = mid; nums[m] === t; m--) { mid = m; }
            return mid;
        }
        else if (nums[mid] < t) s = mid + 1;
        else if (nums[mid] > t) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return false;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
    var ans = [];
    nums.sort((a, b) => a - b);
    var firstIndex = bs(nums, target);
    var i = firstIndex;
    while (nums[i] === target) { ans.push(i); i++; }
    return ans;
};

// console.log(targetIndices([1, 2, 5, 2, 3], 2));
// console.log(targetIndices([1, 2, 5, 2, 3], 3));
// console.log(targetIndices([1, 2, 5, 2, 3], 5));    