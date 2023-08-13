var bsFirst = function (arr, target) {
    var s = 0, e = arr.length - 1;
    var mid;
    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (arr[mid] === target && (mid === 0 || arr[mid - 1] < target)) return mid;
        else if (arr[mid] < target) s = mid + 1;
        else if (arr[mid] > target || arr[mid] === target) e = mid - 1;
    }
    return -1;
};

var bsLast = function (arr, target) {
    var s = 0, e = arr.length - 1;
    var mid;
    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (arr[mid] === target && (mid === arr.length - 1 || arr[mid + 1] > target)) return mid;
        else if (arr[mid] < target || arr[mid] === target) s = mid + 1;
        else if (arr[mid] > target) e = mid - 1;
    }
    return -1;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    return [bsFirst(nums, target), bsLast(nums, target)];
};

// console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange([], 0));