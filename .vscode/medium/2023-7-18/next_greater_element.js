/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    if (nums.length === 1) return [-1];
    var ans = [];
    for (let i = 0; i < nums.length; i++) {
        var j = i === nums.length - 1 ? 0 : i + 1;
        var count = 0;
        while (count !== nums.length - 1) {
            count++;
            if (nums[i] < nums[j]) {
                ans.push(nums[j]);
                break;
            } else j++;
            if (j === nums.length) j = 0;
            if (count === nums.length - 1) ans.push(-1);
        }
    }

    return ans;
};

// console.log(nextGreaterElements([1, 2, 1]));
// console.log(nextGreaterElements([5, 4, 3, 2, 1]));
// console.log(nextGreaterElements([1, 2, 3, 4, 3]));