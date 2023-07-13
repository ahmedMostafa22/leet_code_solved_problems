/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
    var canBe = false;
    for (let i = 0; i < nums.length; i++) {
        if (isIncreasing(nums.slice(0, i).concat(nums.slice(i + 1)))) canBe = true;
    }
    return nums.length === 2 || canBe;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIncreasing = function (nums) {
    // console.log(nums);
    var inc = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) { inc = false; break; }
    }
    return inc;
}

// console.log(canBeIncreasing([1, 2, 10, 5, 7]));
// console.log(canBeIncreasing([2, 3, 1, 2]));
// console.log(canBeIncreasing([1, 1, 1]));
// console.log(canBeIncreasing([1, 1]));
// console.log(canBeIncreasing([262, 138, 583]));

