var bs = function (arr) {
    var s = 0, e = arr.length - 1;
    var mid;
    while (s <= e) {
        mid = Math.floor((s + e) / 2);
        if (arr[mid] < arr[mid - 1]) return arr[mid];
        else if (arr[mid] > arr[arr.length - 1] || mid === 0) s = mid + 1;
        else if (arr[mid] < arr[0] || mid === arr.length - 1) e = mid - 1;
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums[0] <= nums[nums.length - 1]) return nums[0];

    else return bs(nums);
};