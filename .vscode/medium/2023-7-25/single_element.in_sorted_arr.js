/**
 * @param {number[]} nums
 * @return {number}
 */
var bs = function (nums) {
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    // console.log('index', mid, 'value', nums[mid]);
    while (s <= e) {
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) return nums[mid];
        else if ((nums[mid] === nums[mid + 1] && mid % 2 === 0) || (nums[mid] === nums[mid - 1] && mid % 2 !== 0)) s = mid + 1;
        else if ((nums[mid] === nums[mid + 1] && mid % 2 !== 0) || (nums[mid] === nums[mid - 1] && mid % 2 === 0)) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    return bs(nums);
};
    
// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));