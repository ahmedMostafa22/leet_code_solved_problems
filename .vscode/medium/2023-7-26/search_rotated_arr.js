
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPiv = function (nums) {
    if (nums.length === 1 || nums[0] <= nums[nums.length - 1]) return -1;
    var s = 0, e = nums.length;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        console.log(mid);
        if ((mid === 0 || nums[mid] < nums[mid - 1]) && (mid === nums.length - 1 || nums[mid] < nums[mid + 1])) return mid;
        else if (nums[mid] > nums[nums.length - 1]) s = mid + 1;
        else if (nums[mid] < nums[nums.length - 1] || mid === nums.length - 1) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var bs = function (nums, target) {
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    var s = 0, e = nums.length - 1;
    var mid = Math.floor((s + e) / 2);
    while (s <= e) {
        var midE = nums[mid];
        if (midE === target) return mid;
        else if (target > midE) s = mid + 1;
        else if (target < midE) e = mid - 1;
        mid = Math.floor((s + e) / 2);
    }
    return -1;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    var piv = findPiv(nums);
    console.log(piv);
    var firstArr = nums.slice(0, piv), secondArr = nums.slice(piv);
    var res1 = bs(firstArr, target), res2 = bs(secondArr, target);
    return res2 === -1 ? res1 : res2 + firstArr.length;
};

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
// console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
// console.log(search([1], 0));
// console.log(search([1], 1));
// console.log(search([3, 4, 5, 6, 1, 2], 2));